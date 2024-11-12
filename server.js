const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
app.use(express.static('public'));
const server = http.createServer(app);

const io = socketIO(server, { // to give /socket.io endpoint 
  transports: ["websocket"] // added to prevent inital use of long polling on the server side
  // transports: ["polling"] // uses long polling
});

//
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  socket.broadcast.emit("chat message", { id: socket.id, message: "User connected" });

  socket.on("broadcast message", (message) => {
    io.emit("chat message", { id: socket.id, message: message });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    io.emit("chat message", { id: socket.id, message: "User disconnected" });
  });
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

server.listen(3000, () => {
  console.log("server is up and running on port 3000");
});

//test