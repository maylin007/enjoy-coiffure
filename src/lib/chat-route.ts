import { createGroq } from "@ai-sdk/groq";
import { streamText } from "ai";

const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; reset: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + 60_000 });
    return false;
  }
  entry.count++;
  return entry.count > 10;
}

export function createChatRoute(systemPrompt: string) {
  return async function POST(req: Request) {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return new Response("Trop de requêtes. Réessayez dans une minute.", { status: 429 });
    }

    let body;
    try { body = await req.json(); } catch {
      return new Response("Invalid JSON", { status: 400 });
    }

    const { messages } = body;
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 30) {
      return new Response("Invalid messages", { status: 400 });
    }
    for (const m of messages) {
      if (typeof m.role !== "string" || typeof m.content !== "string" || m.content.length > 2000) {
        return new Response("Invalid message format", { status: 400 });
      }
    }

    const result = streamText({
      model: groq("llama-3.3-70b-versatile"),
      system: systemPrompt,
      messages,
    });
    return result.toTextStreamResponse();
  };
}
