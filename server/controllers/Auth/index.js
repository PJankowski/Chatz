import User from '../../models/User';

export default function Login(req, res) {
  const { username, password } = req.body;

  const promise = new Promise((resolve, reject) => {
    User.findOne({ username }, (err, doc) => {
      if (err) {
        reject({ status: 'error', message: 'Oops. Something went wrong, please try again.' });
      } else {
        if (!doc) {
          reject({ status: 'error', message: 'Sorry, we couldn\'t find that user.' });
        } else {
          if (password !== doc.password) {
            reject({ status: 'error', message: 'Sorry, we couldn\'t find that user.' });
          } else {
            resolve(doc);
          }
        }
      }
    });
  });

  promise.then((doc) => {
    res.status(200).json(doc);
  }, (err) => {
    res.status(403).json(err);
  });
}
