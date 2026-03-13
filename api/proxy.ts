// api/proxy.ts
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest,
  res: NextApiResponse) {
  const targetUrl = 'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products';

  try {
    const response = await fetch(targetUrl, {
      method: req.method || 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Добавляем CORS-заголовки вручную (важно!)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}

// Для поддержки OPTIONS preflight (браузер отправляет перед GET)
export const config = {
  api: {
    bodyParser: false,
  },
};