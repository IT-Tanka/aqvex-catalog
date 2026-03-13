export default async function handler(req, res) {
  const base =
    'https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1';

  let path = '';

  if (Array.isArray(req.query.path)) {
    path = req.query.path.join('/');
  } else if (typeof req.query.path === 'string') {
    path = req.query.path;
  }

  const url = `${base}/${path}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}