const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()

const authenticate = require('../auth/auth-middleware.js');
const authRouter = require('../auth/auth-router.js');
const ticketsRouter = require('../tickets/tickets-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/tickets', authenticate, ticketsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to...the back end!' });
  });

module.exports = server;