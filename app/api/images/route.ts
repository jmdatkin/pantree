import { getCompletion } from "@/app/openai";

export async function POST(request: Request) {
  const data = await request.json();
  const imageUrl = data.imageUrl;

  const gptResponse = await getCompletion({
    url: imageUrl,
  });

  const output = gptResponse.choices[0].message.content;

  return Response.json({ data: output });
}
