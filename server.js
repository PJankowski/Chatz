/* eslint no-console: 0*/

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';
import serverConfig from './server/config';


import Login from './server/controllers/Auth';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser({ secret: 'This is a secret' }));
app.use(express.static(path.join(__dirname, 'public')));

const isDeveloping = process.env.NODE_ENV !== 'production';

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'public',
    stats: {
      colors: true,
      ash: false,
      timings: true,
      chunks: true,
      chunkModules: true,
      modules: false,
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

mongoose.connect(serverConfig.mongoUri, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('DB Connected');
  }
});

app.post('/api/login', Login);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen('8080', () => {
  console.log('Listening on port 8080');
});
