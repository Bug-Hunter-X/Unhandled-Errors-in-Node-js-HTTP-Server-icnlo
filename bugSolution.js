const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

//Check if port is in use before starting the server
const isPortTaken = (port) => {
  return new Promise((resolve, reject) => {
    const server = http.createServer();
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(true);
      } else {
        reject(err);
      }
    });
    server.once('listening', () => {
      server.close(() => resolve(false));
    });
    server.listen(port);
  });
};

isPortTaken(port).then(async (taken) => {
  if (taken) {
    console.error(`Port ${port} is already in use.`);
    process.exit(1);
  } else {
    server.on('error', (err) => {
      console.error('Server error:', err);
      //Optionally implement logic to restart the server or take other actions
    });

    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
}).catch((err) => {
  console.error('Error checking port:', err);
  process.exit(1);
});