import mongoose from 'mongoose';
import { Application } from 'express';
import express = require('express');
import bodyParser = require('body-parser');
import usecaseRoutes from './src/routes/usecaseRoutes';
import onGoingRouter from './src/routes/OnGoingRoutes';

const app: Application = express();
const port = 3000;
const mongodb_url = 'mongodb+srv://idolev:il2407@supportplatformdb.tcdb8n4.mongodb.net/';

app.use(bodyParser.json());
app.use('/usecase', usecaseRoutes);
app.use('/on-going', onGoingRouter);

mongoose
  .connect(mongodb_url)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });
