import 'server-only';

import { SignJWT } from 'jose';
import { v7 } from 'uuid';

const hmacKeyEnv = process.env.FORM_TOKEN_SECRET;
if (!hmacKeyEnv) {
  throw Error('The FORM_TOKEN_SECRET environment variable is not defined');
}
const key = Buffer.from(hmacKeyEnv, 'base64');

export const createToken = async (): Promise<string> => {
  const jwt = new SignJWT()
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuer('https://info.qccmakeupacademy.com')
    .setAudience('leads-backend')
    .setJti(v7())
    .setIssuedAt()
    .setExpirationTime('1 day');

  return jwt.sign(key);
};
