import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest,
  res: NextApiResponse) {
  const base = 'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1';

  const url = `${base}${req.url?.replace('/api/proxy', '')}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
  console.error('Proxy error:', error);
  res.status(500).json({ error: 'Failed to fetch products' });
}
}