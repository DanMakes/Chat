private listen(): void {
   this.server.listen(this.port, () => {
    console.log('Running server on port %s', this.port);
   });
  this.io.on('connection', (socket) => {
     socket.broadcast.emit('add-users', {
      users: [socket.id]
     });
  });
 }
