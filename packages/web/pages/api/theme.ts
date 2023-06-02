import type { NextApiRequest, NextApiResponse } from 'next';

import cors from '../../src/cors';

type Data = {
  name: string;
};

const themeHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await cors(req, res);
  const theme = await import('@answersai-marketing/components/src/theme');

  res.status(200).json(JSON.parse(JSON.stringify(theme)));
};

export default themeHandler;
