const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// `/api/users`
// all users
router.route('/').get(getAllUsers).post(createUser);

// single user by _id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// `GET` a single user by its `_id` and populated thought and friend data
router.route('/:userId/thoughts/friends').get(getUserById);

// Remove a user's associated thoughts when deleted
router.route('/:userId/thoughts/:thoughtId').delete(deleteUser);

// `/api/users/:userId/friends/:friendId`
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;