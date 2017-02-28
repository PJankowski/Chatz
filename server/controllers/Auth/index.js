import jwt from 'jsonwebtoken';
import serverConfig from '../../config';
import User from '../../models/User';

export function Login(req, res) {
  const { username, password } = req.body;

  const promise = new Promise((resolve, reject) => {
    User.findOne({ username })
    .populate('requests')
    .exec((err, doc) => {
      if (err) {
        reject({ status: 'Error', message: 'Oops. Something went wrong, please try again.' });
      } else if (!doc) {
        reject({ status: 'Error', message: 'Sorry, we couldn\'t find that user.' });
      } else if (password !== doc.password) {
        reject({ status: 'Error', message: 'Sorry, we couldn\'t find that user.' });
      } else {
        const token = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60),
          data: doc._id,
        },
        serverConfig.jwt_secret);
        resolve({ user: doc, token });
      }
    });
  });

  promise.then((doc) => {
    req.session.user = doc;
    res.status(200).json(doc);
  }, (err) => {
    res.status(403).json(err);
  });
}

export function Signup(req, res) {
  const promise = new Promise((resolve, reject) => {
    const user = new User(req.body);

    user.save((err, doc) => {
      if (err) {
        reject({ status: 'Error', message: 'Sorry, we weren\'t able to use those credentials.' });
      } else {
        resolve(doc);
      }
    });
  });

  promise.then((doc) => {
    req.session.user = doc;
    res.status(200).json(doc);
  }, (err) => {
    res.status(403).json(err);
  });
}
