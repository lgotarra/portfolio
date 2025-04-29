import { pipeline, FeatureExtractionPipeline } from "@xenova/transformers";
import { supabaseClient } from "./supabase.ts";
import { createHash } from "crypto";

let embedder: FeatureExtractionPipeline | null = null;

/**
 * Loads the embedding model if it's not already loaded.
 */
async function getEmbedder(): Promise<FeatureExtractionPipeline> {
  if (!embedder) {
    console.log("Loading embedding model...");
    embedder = (await pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2"
    )) as FeatureExtractionPipeline;
    console.log("Model loaded.");
  }
  return embedder;
}

interface Metadata {
  url: string;
  [key: string]: unknown; // Allow any additional metadata fields
}

/**
 * Stores embeddings in the Supabase 'documents' table.
 */

function generateContentId(url: string, text: string): string {
  return createHash("sha256")
    .update(url + text)
    .digest("hex");
}

export async function storeEmbeddings(
  texts: string[],
  metadata: Metadata
): Promise<void> {
  const embedder = await getEmbedder();

  const embeddingsPromises = texts.map((text) =>
    embedder(text, { pooling: "mean", normalize: true }).then((output) => [
      ...output.data,
    ])
  );

  try {
    const embeddings = await Promise.all(embeddingsPromises);

    const documents = texts.map((text, i) => ({
      content: text,
      metadata,
      content_id: generateContentId(metadata.url, text), // new
      embedding: embeddings[i],
    }));

    const { error } = await supabaseClient
      .from("documents")
      .upsert(documents, { onConflict: "content_id" });

    if (error) {
      console.error("Error upserting embeddings:", error);
    } else {
      console.log("Embeddings upserted successfully");
    }
  } catch (err) {
    console.error("Error processing embeddings:", err);
  }
}

export async function cleanOldDocuments(): Promise<void> {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0); // Set to today 00:00 UTC

  const { error } = await supabaseClient
    .from("documents")
    .delete()
    .lt("updated_at", today.toISOString());

  if (error) {
    console.error("Error cleaning old documents:", error);
  } else {
    console.log("Old documents cleaned successfully");
  }
}
