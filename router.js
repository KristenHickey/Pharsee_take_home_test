const { Router } = require('express');
const router = Router()

const controllers = require('./controllers')

router.get('/notifications/:id', controllers.getNotifications)
router.post('/newNotification', controllers.postNotification)
router.patch('/updateStatus/:id', controllers.updateStatus)

module.exports = router;