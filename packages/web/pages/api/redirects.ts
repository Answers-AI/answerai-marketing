import type { NextApiRequest, NextApiResponse } from 'next';

import { client, parseBooleanEnvVar } from '@answersai-marketing/utils';

import cors from '../../src/cors';

const preview = parseBooleanEnvVar(process.env.CONTENTFUL_USE_PREVIEW);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  try {
    const { data } = await client.Redirects({ preview });
    return res.status(200).json(data?.redirects ?? []);
  } catch (err) {
    return res.status(200).json([]);
  }
};

export default handler;
