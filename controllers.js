import { findAllNotifications, saveNewPost, findAndUpdate } from './models.js';

export function getNotifications(req, res) {
  try {
    const postId = req.params.id;
    const notifications = findAllNotifications()

    const response = notifications.reduce((accumulator, notification) => {
      console.log(postId)
      if (notification.post.id === postId && notification.type === "Like") {
     accumulator.likes.push(notification)
      }
       if (notification.post.id === postId && notification.type === "Comment") {
    accumulator.comments.push(notification)
    }
      return accumulator
    }, {postId,
      likes: [],
      comments: [],
      }
    )

    res.status(200)
    res.send({
      ...response,
      totalLikes: response.likes.length,
      totalComments: response.comments.length,
    })
  } catch (error) {
    res.status(500)
    res.send({error})
  }
}

 export async function postNotification(req, res) {
  try {
 const newPost = req.body
 await saveNewPost(newPost)
 res.status(204)
 res.send()
 } catch (error) {
  res.status(500)
  res.send({error})
 }
}

export async function updateStatus(req, res) {
  try {
    const postId = req.params.id
    await findAndUpdate(postId)
    res.status(204)
    res.send()
  } catch (error) {
    res.status(500)
    res.send({error})
  }
}
