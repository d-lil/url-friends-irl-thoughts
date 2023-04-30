const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// `/api/thoughts`
// all thoughts
router.route('/thoughts').get(getAllThoughts).post(createThought);

// single thought by _id
router.route('/thoughts/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// `/api/thoughts/:thoughtId/reactions`
router.route('/thoughts/:thoughtId/reactions').post(addReaction);

// `/api/thoughts/:thoughtId/reactions/:reactionId`
router.route('/thoughts/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;