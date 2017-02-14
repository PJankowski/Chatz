import mongoose from 'mongoose';

const RequestSchema = mongoose.Schema({
  user_id: { type: Number, ref: 'User' },
  friend_id: String,
});

const Request = mongoose.model('FriendRequest', RequestSchema);

export default Request;
