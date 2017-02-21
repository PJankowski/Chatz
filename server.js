/* eslint no-console: 0*/
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import IO from 'socket.io';
import morgan from 'morgan';
import fs from 'fs';

import config from './webpack.config';
import serverConfig from './server/config';
import DB from './server/db';
import routes from './server/routes';
import Socket from './server/socket';

const app = express();
const server = app.listen(serverConfig.port, () => {
  console.log(`Listening on port ${serverConfig.port}`);
});
const io = new IO(server);

if (!serverConfig.isDeveloping) {
  const accessLogStream = fs.createWriteStream(path.join(__dirname, 'server/logs/access.log'), { flags: 'a' });
  app.use(morgan('combined', { stream: accessLogStream }));
} else {
  app.use(morgan('combined'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser({ secret: 'This is a secret' }));
app.use(express.static(path.join(__dirname, 'public')));

if (serverConfig.isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'public',
    stats: {
      colors: true,
      ash: false,
      timings: false,
      chunks: true,
      chunkModules: false,
      modules: false,
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

DB();

routes(app);

Socket(io);

export default app;
