import express from 'express'

// Import from controllers
import { SpeechController } from '~/controllers/speech.controller'
import { OpenAISpeechController } from '~/controllers/openai_speech.controller'


const router = express.Router()

router
  .route('/fpt')
  .get(SpeechController.getSpeechByText)

router
  .route('/fpt')
  .post(SpeechController.createSpeech)

router
  .route('/openai')
  .post(OpenAISpeechController.getSpeechByText)

router
  .route('/fpt/url')
  .post(SpeechController.getSpeechURL)

export const speechRoutes = router