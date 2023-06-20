"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes_1 = require("./src/routes/userRoutes");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use('/users', userRoutes_1.default);
// const connectOptions: mongoose.ConnectOptions = {
//   useUnifiedTopology: true,
// };
// const mongodb_url = 'mongodb+srv://idolev:il2407@supportplatformdb.tcdb8n4.mongodb.net/';
// new Promise<void>((resolve, reject) => {
//   mongoose.connect(mongodb_url, (error) => {
//     if (error) {
//       console.error('Error connecting to MongoDB', error);
//       reject(error);
//     } else {
//       console.log('Connected to MongoDB');
//       resolve();
//     }
//   });
// })
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Server is listening on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Unable to start the server', error);
//   });
//# sourceMappingURL=server.js.map