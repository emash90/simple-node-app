const router = require('express').Router();
const authControllers = require('../controllers/authControllers');

router.post('/signup', authControllers.signupUser);

router.post('/login', authControllers.loginUser);

router.get('/users', authControllers.getUsers);

module.exports = router;