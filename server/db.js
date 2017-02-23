import mongoose from 'mongoose';
import serverConfig from './config';
// import writeConnectionError from './handlers/db_handler';

export default function DB() {
  mongoose.Promise = global.Promise;

  mongoose.connect(serverConfig.mongoUri, (err) => {
    if (err) {
      // writeConnectionError(err);
      console.log(err);
    }
  });
}
