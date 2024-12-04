// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env['OPENAI_API_KEY'],
// });
// const openai = new OpenAIApi(configuration);

export const generateNarrative = async (prompt: string): Promise<string> => {
  return 'AI WORKS';
  // try {
  //   const response = await openai.createCompletion({
  //     model: 'text-davinci-004',
  //     prompt: prompt,
  //     max_tokens: 300,
  //     temperature: 0.7,
  //   });
  //   return response.data.choices[0].text.trim();
  // } catch (error) {
  //   console.error('OpenAI Error:', error);
  //   throw new Error('Failed to generate narrative');
  // }
};
