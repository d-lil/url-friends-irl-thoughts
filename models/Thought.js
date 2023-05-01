const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction');
const formatDate = require('../utils/formatDate')

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
      get: createdAt => formatDate(createdAt)
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
       type: Schema.Types.ObjectId,
       ref: reactionSchema, 
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);
// Virtual called reactionCount to get the total count of reactions on retrieval
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
}
);
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
