const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //validate: [validateEmail, 'Please enter a valid email address'],
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
