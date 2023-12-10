const { Router } = require('express');
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../controllers/thought-controller');

const router = Router();

// Define routes
router.get('/thoughts', getAllThoughts);
router.get('/thoughts/:id', getThoughtById);
router.post('/thoughts', createThought);
router.put('/thoughts/:id', updateThought);
router.delete('/thoughts/:id', deleteThought);
router.post('/thoughts/:thoughtId/reactions', createReaction);
router.delete('/thoughts/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;

