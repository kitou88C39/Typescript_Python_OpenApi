import { Configuration, DefaultApi } from './grenerated/index';

const config = new Configuration({
  basePath: 'api',
});

const openai = new DefaultApi(config);

document.getElementById('calculate')?.addEventListener('click', async () => {
  const response = await DefaultApi.greetsGet();
  document.getElementById('output')!.textContent = response.message ?? '';
});
