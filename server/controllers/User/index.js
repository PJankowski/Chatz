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
