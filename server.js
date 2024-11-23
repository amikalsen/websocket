const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const app = express();

// serve static files from the public directory 
app.use(express.static('public'));
const server = http.createServer(app);

// initialize socket.io for real-time communication
const io = socketIO(server, { // to give /socket.io endpoint 
  transports: ["websocket"] // added to prevent inital use of long polling on the server side
  // transports: ["polling"] // uses long polling
});

// handle socket connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // notify other users that a new user has connected
  socket.broadcast.emit("chat message", { id: socket.id, message: "User connected" });

  // broadcast incoming messages to all connected clients
  socket.on("broadcast message", (message) => {
    io.emit("chat message", { id: socket.id, message: message });
  });

  // handle user disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    io.emit("chat message", { id: socket.id, message: "User disconnected" });
  });
});

// serve the main HTML file for the application
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

// start the server on port 3000 and log a confirmation message
server.listen(3000, () => {
  console.log("server is up and running on port 3000");
});
