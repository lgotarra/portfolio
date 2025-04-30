import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import chatHandler from "./chat";

const ChatRequestSchema = z.object({
  question: z.string().min(1),
});

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = ChatRequestSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid request", details: result.error.format() },
      { status: 400 }
    );
  }

  const { question } = result.data;

  try {
    const response = await chatHandler(question);
    return NextResponse.json({ answer: response });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 });
  }
}
