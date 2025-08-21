import {createServer} from 'http';

const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({msg: 'Hello you are using my api'}));
  res.end();
});

server.listen(5000, () => {
  console.log(`server is running on port 5000`);
});