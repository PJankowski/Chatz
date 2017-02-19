import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  avatar: String,
  name: {
    first: String,
    last: String,
  },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FriendRequest' }],
});

UserSchema.index({ username: 'text' });

const User = mongoose.model('User', UserSchema);

export default User;
