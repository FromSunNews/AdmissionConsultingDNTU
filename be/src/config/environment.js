require('dotenv').config()

export const env = {
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  BUILD_MODE: process.env.BUILD_MODE,
  CHATGPT_API_KEY: process.env.CHATGPT_API_KEY,
  FPT_BOT_CODE: process.env.FPT_BOT_CODE,
  FPT_SENDER_ID: process.env.FPT_SENDER_ID,
  FPT_API_KEY: process.env.FPT_API_KEY,
  FPT_WEBHOOK_TOKEN: process.env.FPT_WEBHOOK_TOKEN,
  FPT_TTS_API_KEY: process.env.FPT_TTS_API_KEY,
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  MONGODB_URI: process.env.MONGODB_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
  CLIENT: process.env.CLIENT,

  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  TAVILY_API_KEY: process.env.TAVILY_API_KEY,
  GROQ_API_KEY: process.env.GROQ_API_KEY,
  BRAVE_SEARCH_API_KEY: process.env.BRAVE_SEARCH_API_KEY,
  SERPER_API: process.env.SERPER_API,

  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,

  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,

  LANGCHAIN_TRACING_V2: process.env.LANGCHAIN_TRACING_V2,
  LANGCHAIN_ENDPOINT: process.env.LANGCHAIN_ENDPOINT,
  LANGCHAIN_API_KEY: process.env.LANGCHAIN_API_KEY,
  LANGCHAIN_PROJECT: process.env.LANGCHAIN_PROJECT,
  // supabase
  SUPABASE_API_KEY: process.env.SUPABASE_API_KEY,
  SUPABASE_URL_LC_CHATBOT: process.env.SUPABASE_URL_LC_CHATBOT
}