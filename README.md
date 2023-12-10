# Social Network API

This is a social network API built using Express.js, MongoDB, and Mongoose.

## Getting Started

1. Clone the repository.

   ```bash
   git clone https://github.com/your-username/social-network-api.git

 1. Install dependencies.
   ```bash
   npm install
 
 2. Create a .env file in the root of your project with the following content:

   ```bash
   MONGODB_URI=your_mongodb_connection_string

 3. Start the server.
   ```bash
   npm start

##API Routes

Users
GET /api/users: Get all users.
GET /api/users/:id: Get a single user by ID with populated thought and friend data.
POST /api/users: Create a new user.
json
Copy code
{
  "username": "your_username",
  "email": "your_email@example.com"
}
PUT /api/users/:id: Update a user by ID.
DELETE /api/users/:id: Remove a user by ID.
Friends
POST /api/users/:userId/friends/:friendId: Add a new friend to a user's friend list.
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.
Thoughts
GET /api/thoughts: Get all thoughts.
GET /api/thoughts/:id: Get a single thought by ID.
POST /api/thoughts: Create a new thought.
json
Copy code
{
  "thoughtText": "Here's a cool thought...",
  "username": "your_username",
  "userId": "user_id_assigned_by_mongoose"
}
PUT /api/thoughts/:id: Update a thought by ID.
DELETE /api/thoughts/:id: Remove a thought by ID.
Reactions
POST /api/thoughts/:thoughtId/reactions: Create a reaction for a thought.
json
Copy code
{
  "reactionBody": "Interesting!",
  "username": "your_username"
}
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction by reaction ID.
Walkthrough Video

Link to the Walkthrough Video

javascript
Copy code

Remember to replace placeholder information (such as `your_mongodb_connection_string`, `your_username`, `your_email@example.com`, `your_walkthrough_video_link`, etc.) with the actual details of your project. Update the README with additional information as needed.

 


