const { ObjectID } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    // get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughtData = await Thought.find()
                // .populate({
                //     path: 'reactions',
                //     select: '-__v'
                // })
                // .select('-__v')
                // .sort({ _id: 1 });
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // get one thought by id
    async getThoughtById(req, res) {
        try {
            const thoughtData = await Thought.findOne({ _id: params.id })
                // .populate({
                //     path: 'reactions',
                //     select: '-__v'
                // })
                .select('-__v');
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // create thought
    async createThought(req, res) {
        try {
            const thoughtData = await Thought.create(req.body);
            res.json(thoughtData);
        }   catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // update thought by id
    async updateThought(req, res) {
        try {
                const thoughtData = await Thought.findOneAndUpdate({ _id: params.id });
                if (!thoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(thoughtData);
            } catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        },

    // delete thought
    async deleteThought(req, res) {
        try {
            const thoughtData = await Thought.findOneAndDelete({ _id: params.id });
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // add reaction
    async addReaction({ params, body }, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                { $push: { reactions: body } },
                { new: true, runValidators: true }
            );
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // remove reaction
    async removeReaction(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                { $pull: { reactions: { reactionId: params.reactionId } } },
                { new: true }
            );
            if (!thoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
};