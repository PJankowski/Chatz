import User from '../../models/User';
import FriendRequest from '../../models/FriendRequest';

export function GetUsers(req, res) {
  User.find({}, (err, users) => {
    res.status(200).json(users);
  });
}

export function SearchUsers(q) {
  const promise = new Promise((resolve, reject) => {
    if (q === '') {
      resolve([]);
    } else {
      User.find({ username: { $regex: q, $options: 'i' } }, (err, users) => {
        if (err) {
          reject(err);
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
    const request = new FriendRequest({ user_id: userId, friend_id: friendId });

    request.save((err, doc) => {
      if (err) {
        reject(err);
      } else {
        resolve(doc);
      }
    });
  });

  return promise;
}