import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { supabaseClient } from "@/utils/supabaseClient";
import { Document } from "langchain/document";
import { llmsClient } from "@/utils/llmsClient";
import { pipeline, FeatureExtractionPipeline } from "@xenova/transformers";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { PromptTemplate } from "@langchain/core/prompts";

export const retrievalPrompt = PromptTemplate.fromTemplate(`
You are an assistant that answers questions strictly based on the provided context. 
Do not use any external knowledge. If the context does not contain the answer, say "I'm sorry, I don't have that information."

Context:
{context}

Question:
{input}

Answer:
`);

let embedder: FeatureExtractionPipeline | null = null;

/**
 * Loads the embedding model if it's not already loaded.
 */
export async function getEmbedder(): Promise<FeatureExtractionPipeline> {
  if (!embedder) {
    console.log("Loading embedding model...");
    embedder = (await pipeline(
      "feature-extraction",
      "Supabase/gte-small"
    )) as FeatureExtractionPipeline;
    console.log("Model loaded.");
  }
  return embedder;
}

export default async function chatHandler(question: string) {
  try {
    const embed = await getEmbedder();
    const tensor = await embed(question);
    const embeddedQuery = Array.from(tensor.data);

    const vectorStore = await SupabaseVectorStore.fromExistingIndex(
      {
        embedQuery: async () => embeddedQuery,
        embedDocuments: async () => [],
      },
      {
        client: supabaseClient,
        tableName: "documents",
        queryName: "match_documents",
      }
    );

    const retriever = vectorStore.asRetriever({
      k: 4, // top-k results
    });

    const combineDocsChain = await createStuffDocumentsChain({
      llm: llmsClient,
      prompt: retrievalPrompt,
    });

    const retrievalChain = await createRetrievalChain({
      retriever,
      combineDocsChain,
    });

    const result = await retrievalChain.invoke({
      input: question,
    });

    return {
      answer: result.answer,
      sources: result.context?.map((doc: Document) => doc.metadata),
    };
  } catch (err) {
    console.log(`Error in chat handler`, err);
    throw new Error(`Error in chatHandler: ${err}`);
  }
}
