const expess = require('express');
const { registerController } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerController)

module.exports = router;
// this is the commit mesg