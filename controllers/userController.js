const { User, Thought } = require('../models');

module.exports = {
    // get all users
    async getAllUsers(req, res) {
        try {
            const userData = await User.find()
                // .populate({
                //     path: 'thoughts',
                //     select: '-__v'
                // })
                // .select('-__v')
                // .sort({ _id: 1 });
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // get one user by id
    async getUserById(req, res) {
        try {
            const userData = await User.findOne({ _id: params.id })
                // .populate({
                //     path: 'thoughts',
                //     select: '-__v'
                // })
                .select('-__v');
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // create user
    async createUser(req, res) {
        try {
            const userData = await User.create(req.body);
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // update user by id
    async updateUser(req, res) {
        try {
            const userData = await User.findOneAndUpdate({ _id: params.id });
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // delete user
    async deleteUser(req, res) {
        try {
            const userData = await User.findOneAndRemove({ _id: req.params.studentId });

            if (!userData) {
              return res.status(404).json({ message: 'No such user exists' });
            }
      
            const thought = await Thought.findOneAndUpdate(
              { users: req.params.userId },
              { $pull: { users: req.params.userId } },
              { new: true }
            );
      
            if (!thought) {
              return res.status(404).json({
                message: 'User deleted, but no thoughts found',
              });
            }
      
            res.json({ message: 'User successfully deleted' });
          } catch (err) {
            console.log(err);
            res.status(500).json(err);
            }
    },

    // add friend
    async addFriend(req, res) {
        try {
            const userData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );
            if (!userData) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(userData);
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // remove friend
    async deleteFriend(req, res) {
        try {
            const userData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            if (!userData) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(userData);
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
}
