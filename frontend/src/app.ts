import { Configuration, OpenAIApi } from './grenerated/index';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: 'gpt-3.5-turbo',
  prompt: 'Hello, world!',
});
