import { Server } from "socket-io";
import http from "http";

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: "http",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`user joined in ${socket.id}`);

  socket.on("join-room", (data) => {
    socket.join(data.room);
  });
  
  socket.on("send-message", (data) => {
    io.to(data.room).emit("receive message", data);
  });

io.on("disconnect", () => { 
    console.log(socket.id, "has disconnected")
})
});
