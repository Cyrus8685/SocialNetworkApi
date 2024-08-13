# SocialNetworkApi
SocialNetworkApi


Created a Social Network API

Users Can register to access to the API

They Can Update Their User Information After Registered

Once Registered they can Post their Thoughts and Reaction to Thoughts

They are able to Update, and Delete their posted Thoughts and Reactions

They Are Also able to Add other registered users to their Friends List as well as Remove them

Users can search for other uses as well as delete their account if needed

The Api Routes Listed Below are the routes needed for achieve their corresponding functions



USER

Create a new user: POST /api/users

Get all users: GET /api/users

Get a single user by its id: GET /api/users/:userId

Update a user by its id: PUT /api/users/:userId

Delete a user by its id: DELETE /api/user/:userId

 FRIEND

Add a new friend to a user's friend list: POST /api/users/:userid/friends/:friendId
Delete a friend from a user's friend list: DELETE /api/users/:userid/friends/:friendId

THOUGHT

Create a new thought: POST /api/thoughts/
Get all thoughts: GET /api/thoughts/
Get a single thought by its id: GET /api/thoughts/:thoughtId
Update a thought by its id: PUT /api/thoughts/:thoughtId
Delete a thought by its id: DELETE /api/thoughts/:thoughtId

 REACTION

Create a reaction: POST /api/thoughts/:thoughtId/reactions
Delete a reaction by the reactionId: DEL /api/thoughts/:thoughtId/reactions/:reactionId

Demonstration Video Link:

file:///var/folders/8d/xp79xwz56wxdflt1mcjb2c980000gn/T/2024-08-13_16-25-26.mp4