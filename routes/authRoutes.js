const router = require('express').Router();
const authControllers = require('../controllers/authControllers');
const protect = require('../middlewares/authMiddleware');

router.post('/signup', authControllers.signupUser);

router.post('/login', authControllers.loginUser);

router.get('/users', protect, authControllers.getUsers);

module.exports = router;