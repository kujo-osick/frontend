import type { NextApiRequest, NextApiResponse } from 'next';

export default async function metricsHandler(req: NextApiRequest, res: NextApiResponse) {
  res.send('metricsHandler');
}
