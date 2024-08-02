import OpenAI from "openai";
import { ImageURL } from "openai/resources/beta/threads/messages.mjs";

const client = new OpenAI();

export const getCompletion = async (imageUrl: ImageURL) =>
  client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What's in this image? Use only 1-5 words to describe it very generally.",
          },
          {
            type: "image_url",
            image_url: imageUrl,
          },
        ],
      },
    ],
    max_tokens: 300,
  });
