const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please enter a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
  },
  {
    toJSON: {
        virtuals: true,
        getters: true,
    },
  }
);
// virtual called friendCount that retrieves the length of the user's friends array field on query.
const User = model('user', userSchema);

module.exports = User;
