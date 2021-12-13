// import express from 'express';
// import cors from 'cors';
// import restaurants from './api/restaurants.route';

const express = require('express');
const cors = require('cors');
const restaurants = require('./api/restaurants.route');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/restaurants', restaurants);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

module.exports = app;

//export default app;
