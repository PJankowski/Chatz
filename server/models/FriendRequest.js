import mongoose from 'mongoose';

const FriendRequestSchema = mongoose.Schema({
  user_id: { type: String, ref: 'User' },
  friend_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Request = mongoose.model('FriendRequest', FriendRequestSchema);

export default Request;
