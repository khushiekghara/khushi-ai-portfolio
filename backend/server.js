import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import profile from "./profile.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

app.get("/", (req, res) => {
  res.json({
    message: "Khushi AI backend is running!",
  });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const response = await client.chat.completions.create({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are Khushi's personal AI career assistant.

Use ONLY the information provided below.

Do not invent:
- projects
- skills
- education
- achievements
- experience
- personal information

If the requested information is not available, say:
"I don't have that information."

Keep answers professional, helpful and concise.

KHUSHI'S PROFILE:

${profile}
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply =
      response.choices?.[0]?.message?.content ||
      "I couldn't generate a response.";

    res.json({
      reply,
    });
  } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
      error: "Failed to get AI response",
    });
  }
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(
      `🚀 Khushi AI backend running on http://localhost:${PORT}`
    );
  });
}

export default app;