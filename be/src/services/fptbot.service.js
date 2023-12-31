// Import from config
import { env } from '~/config/environment'

const _botBaseURL_ = 'https://bot.fpt.ai'
const _v3APIBaseURL_ = 'https://v3-api.fpt.ai'
const _apiBaseURL_ = 'https://api.fpt.ai'

const _channel_ = 'api'
const _api_ = {
  chatbot: '/api/get_answer',
  predict: '/api/v3/predict',
  tts: `/hmi/tts/v5?api_key=${env.FPT_TTS_API_KEY}&voice=linhsan`
}
const _type_ = 'text'

const BOT_URL = _botBaseURL_ + _api_.chatbot
const PREDICT_URL = _v3APIBaseURL_ + _api_.predict
const TTS_URL = _apiBaseURL_ + _api_.tts

/**
 * __Local function__
 *
 * Use this function to create a request body for bot's answer request.
 * @param {string} content
 * @param {string} type
 * @returns
 */
function getRequestBody(content, type = _type_) {
  return {
    'channel': _channel_,
    'app_code': env.FPT_BOT_CODE,
    'sender_id': env.FPT_SENDER_ID,
    'type': _type_,
    'message': {
      'content': content,
      'type': type
    }
  }
}

/**
 * Use this function to get FPT Bot's answer from FPT BOT.
 * @param {string} content
 * @param {string} type
 */
async function getAnswer(content, type = _type_) {
  return fetch(BOT_URL, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + env.FPT_API_KEY
    },
    method: 'post',
    body: JSON.stringify(getRequestBody(content, type))
  })
}

/**
 * Use this function to get predicts from NPL of FPT.
 * @param {string} text
 * @returns
 */
async function getPredict(text) {
  return fetch(PREDICT_URL, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + env.FPT_API_KEY
    },
    method: 'post',
    body: JSON.stringify({ content: text })
  })
}

/**
 * Use this function to get text from string.
 * @param {string} text
 */
async function getSpeech(text) {
  return fetch(TTS_URL, {
    method: 'post',
    body: text
  })
}

export const FPTBotServices = {
  getAnswer,
  getPredict,
  getSpeech
}