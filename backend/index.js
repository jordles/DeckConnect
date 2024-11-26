import {GoogleGenerativeAI} from '@google/generative-ai';
import 'dotenv/config';

const ai = new GoogleGenerativeAI(/* process.env.API_KEY */);
const model = ai.getGenerativeModel({model: "gemini-1.5-flash"});

const prompt = "Write a story about Robin Allen summarized in 2 paragraphs";
const result = await model.generateContent(prompt);
console.log(result.response.text());