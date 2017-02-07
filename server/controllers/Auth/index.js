import User from '../../models/User';

export default function Login(req, res) {
  const { username, password } = req.body;

  const promise = new Promise((resolve, reject) => {
    User.findOne({ username }, (err, doc) => {
      if (err) {
        reject(err);
      } else {
        if (!doc) {
          reject(err);
        } else {
          if (password !== doc.password) {
            reject(err);
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
