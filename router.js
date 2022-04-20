import { Router } from 'express';
import { getNotifications, postNotification, updateStatus } from './controllers.js';

const router = Router()


router.get('/notifications/:id', getNotifications)
router.post('/newNotification', postNotification)
router.patch('/updateStatus/:id', updateStatus)

export default router;
