import type { NextApiRequest, NextApiResponse } from 'next';

export default async function logHandler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send('ok');
}
