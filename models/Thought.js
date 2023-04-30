const { Schema, model } = require('mongoose');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
       type: String,
       required: true, 
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
// Virtual called reactionCount to get the total count of reactions on retrieval
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
