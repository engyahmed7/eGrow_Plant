const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('mock-api-data.json');
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,POST,PUT,DELETE'
}));

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
