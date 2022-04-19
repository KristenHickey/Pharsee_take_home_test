const { db } = require('./db')

function findAllNotifications() {
  // return new Promise((resolve, reject) => {
  //   resolve (db.msgs)
  // })
  return db.notifications;
}
function saveNewPost(notification) {
  db.notifications.push(notification);
  return notification;
}

function findAndUpdate(id) {
  const notifications = db.notifications
  for (let i = 0; i < notifications.length; i++){
    if (notifications[i].post.id === id) {
      notifications[i].read = true;
    }
  }
}
module.exports = {findAllNotifications, saveNewPost, findAndUpdate}