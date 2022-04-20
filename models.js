import { db, writeToJSON } from "./db.js";

export function findAllNotifications() {
  return db.notifications;
}

export function saveNewPost(notification) {
  db.notifications.push(notification);
  writeToJSON()
  return notification;
}

export function findAndUpdate(id) {
  const notifications = db.notifications
  notifications.forEach(notification => {
    if (notification.post.id === id) {
      notification.read = true;
    }
  })
  writeToJSON()
}