var express = require('express');
var userController = require('../Controller/UserController');
var router = express.Router();



router.get('/', async (req, res, next) => {
  const userData = await userController.getUsers(req, res);
  res.render('index', { title: 'User Data', userData: userData });
});

// It's just used at first time to added random data.
router.get('/addUser', async (req, res) => {
  userController.addUser(req, res);
});

router.post('/editUser', async (req, res) => {
  userController.updateUser(req, res);
})

router.get('/editUser/:id', async (req, res) => {
  const data = await userController.singleUser(req.params.id);
  res.render('editUser', { data: data })
})

router.get('/deleteUser/:id', async (req, res) => {
  userController.deleteUser(req, res);
})
module.exports = router;
