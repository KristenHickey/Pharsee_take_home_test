const { Router } = require('express');
const router = Router;

const controllers = require('./controllers')

router.get('/:id', controllers.getNotifications)
router.post('/newNotification', controllers.postNotification)
router.patch('/updateStatus/:id', controllers.updateStatus)

module.export = router;