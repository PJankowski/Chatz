import mongoose from 'mongoose';

const FriendRequestSchema = mongoose.Schema({
  user_id: { type: Number, ref: 'User' },
  friend_id: String,
});

const Request = mongoose.model('FriendRequest', FriendRequestSchema);

export default Request;
