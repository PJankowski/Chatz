import path from 'path';
import { Login, Signup } from './controllers/Auth';
import { GetUser } from './controllers/User';

export default function routes(app) {
  app.post('/api/user', GetUser);
  app.post('/api/login', Login);
  app.post('/api/signup', Signup);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}
