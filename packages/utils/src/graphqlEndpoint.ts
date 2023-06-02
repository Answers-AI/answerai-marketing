const isVercel = !!process.env.VERCEL_URL;
const isBuild = process.env.STAGE === 'build';
const isLive = !isBuild;

let URL = 'http://localhost:8888/graphql';

if (isLive && isVercel) {
  URL = `https://${process.env.VERCEL_URL}/api/graphql`;
}

export default URL;
