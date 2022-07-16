import fs from 'fs/promises';
import cryptoJs from 'crypto-js';

// できたが実行できない
(async () => {
  try {
    const argv = process.argv[2];
    const execDir = __dirname;

    if (!argv) {
      throw new Error('Not Env.\nExample: local or prd');
    }
    const fileName = `.env.${argv}.encrypted`;
    const filePath = `${execDir}/.env.${argv}`;
    const keyName = `${execDir}/key.${argv}`;

    const file = await fs.readFile(filePath, 'utf-8');
    const key = await fs.readFile(keyName, 'utf-8');

    let encrypted = '';
    const lines = file.split('\n');
    lines.forEach((line) => {
      if (line !== '') {
        const items = line.split('=');
        const encryptedValue = cryptoJs.AES.encrypt(items[1], key);
        encrypted += `${items[0]}=${encryptedValue}\n`;
      }
    });

    await fs.writeFile(fileName, encrypted);
  } catch (e: unknown) {
    console.log('errorが発生しました。');
    console.warn(e);
  }
})();

export {};
