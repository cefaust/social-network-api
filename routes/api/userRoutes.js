const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController.js');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userid/friends
router.route('/:userId/friends/:friendId').post(addFriend);

// /api/users/:userid/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
