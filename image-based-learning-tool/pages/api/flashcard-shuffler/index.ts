
import type { NextApiRequest, NextApiResponse } from 'next';

const message = 'A message from CS361 [Flashcard Shuffler Service]';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message });
};

export default handler;