import fs from 'fs';
import path from 'path';
import moment from 'moment';

export default function writeConnectionError(error) {
  const stream = fs.createWriteStream(path.join(__dirname, '../logs/database.log'), { flags: 'a' });
  stream.once('open', () => {
    stream.write(`[${moment().format('MM/D/YY, HH:MM:SS')}] ${JSON.stringify(error)}\n`);
    stream.close();
  });
}
