# Social Network API

## Description

This repository contains a social network API built using Express.js, MongoDB, and Mongoose.



## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tech-blog.git
2. Install dependencies.
   ```bash
   npm install

3. Create a .env file in the root of your project with the following content:
   ```bash
   MONGODB_URI=your_mongodb_connection_string


4. Start the server.
   ```bash
   npm start
5. Open your browser and go to [http://localhost:3001](http://localhost:3001).


# API Routes

## Users

- **GET /api/users:** Get all users.
- **GET /api/users/:id:** Get a single user by ID with populated thought and friend data.
- **POST /api/users:** Create a new user.

  ```json
  {
    "username": "your_username",
    "email": "your_email@example.com"
  }

- **PUT /api/users/:id:** Update a user by ID.
- **DELETE /api/users/:id:** Remove a user by ID.


## Friends 
- **POST /api/users/:userId/friends/:friendId:** Add a new friend to a user's friend list.
- **DELETE /api/users/:userId/friends/:friendId:** Remove a friend from a user's friend list.

## Thoughts
- **GET /api/thoughts:** Get all thoughts.
- **GET /api/thoughts/:id:** Get a single thought by ID.
- **POST /api/thoughts:** Create a new thought.

     ```json
     {
  "thoughtText": "Here's a cool thought...",
  "username": "your_username",
  "userId": "user_id_assigned_by_mongoose"
}
- **PUT /api/thoughts/:id:** Update a thought by ID.
- **DELETE /api/thoughts/:id:** Remove a thought by ID.


## Reactions
 - **POST /api/thoughts/:thoughtId/reactions:** Create a reaction for a thought.
   ```json
   {
  "reactionBody": "Interesting!",
  "username": "your_username"
}

- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId:** Remove a reaction by reaction ID.
## Walkthrough Video

[Link to the Walkthrough Video](your_walkthrough_video_link)


