# Willder's Backend-Auth Application

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)

## Getting Started

This project is based on Node.js + GCF + Javascript + ExpressJS + MongoDB.

### Prerequisites

- Node.js
- GCP Acount(For deploy other wise it is optional)

### Installation

Follow these steps to set up and run the project:

1. Clone the repository.
2. Open cloned folder in preferred code editor, ex. VSCode.
3. Install npm dependencies: `npm install`
4. Create a `.env` file inside root directory and copy keys from .env.example file and SET values to them
5. Start the application (By using any one of them): 1. ```npm run start``` 2. ```npm run start:dev```

## API Endpoints

 - API Structure - localhost:5001/project-id/asia-northeast1/api
 - All APIs collection available in dev/postman/ folder
 - Ex. Base_url + endpoint

| Endpoint                         | Method | Description                            |
|----------------------------------|--------|----------------------------------------|
| `/api/blog`                      | POST   | Create new Blog.                       |
| `/api/blog/:blogId`              | PATCH  | Update existing Blog.                  |
| `/api/blog/:blogId`              | GET    | Get Blog By Id.                        |
| `/api/blog/:blogId`              | DELETE | Delete Blog By Id.                     |

### POST /blog

Creates a new blog in the database.

#### Request Body

- `title`: The title of the blog.
- `content`: The content of the blog.
- `author`: The author of the blog.

#### Response

- `success`: A message indicating the success or failure of the request
- `data`: The newly created blog.
- `message`: error message

### GET /blog/:blogId

Retrieves a single blog from the database.

#### Path Parameters

- `blogId`: The ID of the blog to retrieve.

#### Response

- `success`: A message indicating the success or failure of the request.
- `data`: The retrieved blog post.
- `message`: error message

### PATCH /blog/:blogId

Updates an existing blog post in the database.

#### Path Parameters

- `blogId`: The ID of the blog post to update.

#### Request Body

- `title` (optional): The updated title of the blog.
- `content` (optional): The updated content of the blog.
- `author` (optional): The updated author of the blog.

#### Response

- `success`: A message indicating the success or failure of the request.
- `data`: The updated blog.
- `message`: error message


### DELETE /blog/:blogId

Deletes an existing blog from the database.

#### Path Parameters

- `blogId`: The ID of the blog to delete.

#### Response

- `success`: A message indicating the success or error of the request.
- `data`: true if success
- `message`: error message.

## Database Schema

The application uses a MongoDB database to store blog. The schema for the `blogs` collection is as follows:

```javascript
{
  title: String,
  content: String,
  author: String,
  publicationDate: Date
  createdAt: Date.now()
  updatedAt: Date.now()
}
```
----------------------------------------------------------------------------------------------


