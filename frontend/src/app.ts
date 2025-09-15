import { Configuration, DefaultApi } from './grenerated/index';

const config = new Configuration({
  basePath: '/api',
});

const openai = new DefaultApi(config);

document.getElementById('greet-btn')?.addEventListener('click', async () => {
  const response = await DefaultApi.greetsGet();
  document.getElementById('output')!.textContent = response.message ?? '';
});

document.getElementById('calc-btn')?.addEventListener('click', async () => {
  const response = await DefaultApi.calculatePost({
    calculatePostRequest: { num1: 5, num2: 10 },
  });
  document.getElementById('output')!.textContent = `Result: ${response.result}`;
});
