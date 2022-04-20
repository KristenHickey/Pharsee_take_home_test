import { Router } from 'express';
const router = Router()

import { getNotifications, postNotification, updateStatus } from './controllers.js';

router.get('/notifications/:id', getNotifications)
router.post('/newNotification', postNotification)
router.patch('/updateStatus/:id', updateStatus)

export default router;


// fill out readme
