# Pharsee take home test

Thank you for giving me the opportunity to show you what I can do with your take home test, I was able to complete this within the specified 4 hours.

## Getting started

In order to run my test you will need npm and Node.

## Installation

1. Install dependencies.

   ```bash
   npm install
   ```

2. Create a .env in the folder with the following variable:

   - SERVER_PORT

3. From the terminal, in the folder, run `node index` to start the server.
   ```bash
    node index
   ```

## REST API ENDPOINTS

#### GET

get notifications for a given post

#### '/notifications/:id'

##### Response Example

```json
{
  "postId": "b1638f970c3ddd528671df76c4dcf13e",
  "likes": [
    {
      "type": "Like",
      "read": true,
      "post": {
        "id": "b1638f970c3ddd528671df76c4dcf13e",
        "title": "Acme Inc dynamically scales niches worldwide"
      },
      "user": {
        "id": "403f220c3d413fe9cb0b36142ebfb35d",
        "name": "Mary T. Price"
      }
    },
    {
      "type": "Like",
      "read": true,
      "post": {
        "id": "b1638f970c3ddd528671df76c4dcf13e",
        "title": "Acme Inc dynamically scales niches worldwide"
      },
      "user": {
        "id": "5497afbf9df3f6ff6f9ba11cdef5310f",
        "name": "Suoma Narjus"
      }
    },
    {
      "type": "Like",
      "read": true,
      "post": {
        "id": "b1638f970c3ddd528671df76c4dcf13e",
        "title": "Acme Inc dynamically scales niches worldwide"
      },
      "user": {
        "id": "fa527981cbbcb070be95854985c3188f",
        "name": "Sandra Ortega"
      }
    },
    {
      "type": "Like",
      "read": true,
      "post": {
        "id": "b1638f970c3ddd528671df76c4dcf13e",
        "title": "Acme Inc dynamically scales niches worldwide"
      },
      "user": {
        "id": "4c18d43d4deccbac21a26c55f1033f53",
        "name": "William Hunt"
      }
    },
    {
      "type": "Like",
      "read": true,
      "post": {
        "id": "b1638f970c3ddd528671df76c4dcf13e",
        "title": "Acme Inc dynamically scales niches worldwide"
      },
      "user": {
        "id": "38be3079117301f2f61264d6e0fbf7db",
        "name": "An Mao"
      }
    }
  ],
  "comments": [
    {
      "type": "Comment",
      "read": true,
      "post": {
        "id": "b1638f970c3ddd528671df76c4dcf13e",
        "title": "Acme Inc dynamically scales niches worldwide"
      },
      "comment": {
        "id": "46f72ffb3a5717dcd71e26369d1e13a5",
        "commentText": "Acme remains one of my fave company ever! The way they scale is so dynamic that makes HTML5 look static!"
      },
      "user": {
        "id": "5497afbf9df3f6ff6f9ba11cdef5310f",
        "name": "Suoma Narjus"
      }
    }
  ],
  "totalLikes": 5,
  "totalComments": 1
}
```

#### POST

Create a notification.

#### '/newNotification'

##### Request Example

```json
{
  "type": "Like",
  "read": false,
  "post": {
    "id": "b1638f970c3ddd528671df76c4dcf13e",
    "title": "Acme Inc dynamically scales niches worldwide"
  },
  "user": {
    "id": "403f220c3d413fe9cb0b2535",
    "name": "Kristen Hickey "
  }
}
```

##### Response Example

```json
{}
```

Successful request will have a 204 status.

#### PATCH

update the read status for notificatiosn of a given post.

#### '/updateStatus/:id'

##### Response Example

```json
{}
```

Successful request will have a 204 status.
