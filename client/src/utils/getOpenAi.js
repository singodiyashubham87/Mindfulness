import OpenAI from "openai";
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

export default openai;