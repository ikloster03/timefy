let express = require('express');
let router = express.Router();
const TimerController = require('../../controllers/timer');

router.get( '/', TimerController.all );
router.get( '/:id',TimerController.findById );
router.post( '/', TimerController.create );
router.put( '/:id', TimerController.update );
router.delete( '/:id', TimerController.delete );

module.exports = router;