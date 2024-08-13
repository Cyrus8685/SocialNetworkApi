const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://Cyrus:39sRx9dFzpDX8PB5@socialnetworkapi.z6o6g.mongodb.net/';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
