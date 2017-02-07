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
});

const User = mongoose.model('User', UserSchema);

export default User;
