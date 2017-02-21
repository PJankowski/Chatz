import mongoose from 'mongoose';

const FriendRequestSchema = mongoose.Schema({
  user_id: { type: String, ref: 'User' },
  friend_id: { type: String, unique: true },
});

const Request = mongoose.model('FriendRequest', FriendRequestSchema);

export default Request;
