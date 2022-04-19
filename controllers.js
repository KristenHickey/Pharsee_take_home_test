// const db = require('./db')
const {findAllNotifications, saveNewPost, findAndUpdate}= require('./models');
const fs = require('fs')

async function getNotifications(req, res) {
  try {
    const postId = req.params.id;
    const notifications = findAllNotifications()
    const likes = notifications.filter(notification => {
      if (notification.post.id === postId && notification.type === "Like") {
        return notification
      }
    })
    const comments = notifications.filter(notification => {
      if (notification.post.id === postId && notification.type === "Comment") {
        return notification
      }
    })
    res.status(200)
    res.send({
      postId,
      totalLikes: likes.length,
      likes,
      totalComments: comments.length,
      comments
    })
  } catch (error) {
    res.status(500)
    res.send({error})
  }
}

 async function postNotification(req, res) {
  try {
 const newPost = req.body
//     fs.readFile('db', function (err, data) {
//       const json = JSON.parse(data)
//       json.push(newPost)
//       fs.writeFile("db", JSON.stringify(json))
//     })
//     // console.log(req.body)
//     // db.property = [...db, newPost]
//     // console.log(db)
 res.status(204)
 res.send()
saveNewPost(newPost)
 } catch (error) {
  res.status(500)
  res.send({error})
 }
}

async function updateStatus(req, res) {
  try {
    const postId = req.params.id
    findAndUpdate(postId)
    res.status(204)
    res.send()
  } catch (error) {
    res.status(500)
    res.send({error})
  }
}

module.exports = {getNotifications, postNotification, updateStatus}