import type { NextApiRequest, NextApiResponse } from 'next';

export default async function mediaTypeHandler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ type: undefined });
}
