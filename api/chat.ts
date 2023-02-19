import type {VercelRequest, VercelResponse} from "@vercel/node";
import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {

    const prompt = request.query["prompt"];
    if (!prompt || prompt === '') {
        response
            .status(400)
            .json('missing prompt')
        return;
    }

    // Model options: https://platform.openai.com/docs/models/overview
    const openAiResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0,
        max_tokens: 100,
    });

    response
        .status(200)
        .json(openAiResponse.data);
}
