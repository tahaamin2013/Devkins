import type { NextApiRequest, NextApiResponse } from 'next';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const writeFileAsync = promisify(fs.writeFile);

export const config = {
  api: {
    bodyParser: false,
  },
};

const convertPngToJpg = async (buffer: Buffer): Promise<Buffer> => {
  return sharp(buffer)
    .jpeg()
    .toBuffer();
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const chunks: Buffer[] = [];
  req.on('data', (chunk) => {
    chunks.push(chunk);
  });

  req.on('end', async () => {
    const buffer = Buffer.concat(chunks);
    try {
      const jpgBuffer = await convertPngToJpg(buffer);
      const filePath = path.join(process.cwd(), 'public', 'output.jpg');
      await writeFileAsync(filePath, jpgBuffer);
      res.status(200).json({ message: 'Conversion successful', url: '/output.jpg' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Conversion failed', error });
    }
  });
};

export default handler;
