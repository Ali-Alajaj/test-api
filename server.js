import {createServer} from 'http';

const port = process.env.PORT
const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({msg: 'Hello you are using my api'}));
  res.end();
});

// running the server
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});