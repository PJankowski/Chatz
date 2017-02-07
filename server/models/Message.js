import mongoose from 'mongoose';

const MessageSchema = mongoose.Schema({
  text: String,
  to: String,
  user: { type: Number, ref: 'User' },
  date: Date.now(),
});

const Message = mongoose.model('Message', MessageSchema);

export default Message;
