import jwt from 'jsonwebtoken';

import User from '../../models/User';
import FriendRequest from '../../models/FriendRequest';

export function GetUser(req, res) {
  const token = req.body.token;
  const promise = new Promise((resolve, reject) => {
    const data = jwt.decode(token);

    User.findOne({ _id: data.data }, (err, doc) => {
      if (err) {
        reject(err);
      } else if (!doc) {
        reject(err);
      } else {
        resolve(doc);
      }
    });
  });

  promise.then((user) => {
    res.status(200).json(user);
  }, (err) => {
    res.status(403).json(err);
  });
}

export function SearchUsers(q) {
  const promise = new Promise((resolve, reject) => {
    if (q === '') {
      resolve([]);
    } else {
      User.find({ username: { $regex: q, $options: 'i' } }, (err, users) => {
        if (err) {
          reject({ status: 'Error', message: 'We are sorry. Something went wrong.' });
          return;
        }
        resolve(users);
      });
    }
  });

  return promise;
}

export function RequestFriend(userId, friendId) {
  const promise = new Promise((resolve, reject) => {
    const q = new FriendRequest({
      user_id: userId,
      friend_id: friendId,
    });

    q.save()
      .then((doc) => {
        resolve(doc);
      })
      .catch(() => {
        reject({ status: 'Error', message: 'We are sorry. We can\'t find that person.' });
      });
  });

  return promise;
}
