import { getCompletion } from "@/app/openai";

export async function POST(request: Request) {
  const data = await request.json();
  const imageUrl = data.imageUrl;

  const gptResponse = await getCompletion({
    url: imageUrl,
  });

  const output = gptResponse.choices[0].message.content;

  const res = Response.json({ data: output });

  res.headers.set("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );

  return res;
}
