"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const usecaseRoutes_1 = require("./src/routes/usecaseRoutes");
const OnGoingRoutes_1 = require("./src/routes/OnGoingRoutes");
const GatewayDetailsRoutes_1 = require("./src/routes/GatewayDetailsRoutes");
const app = express();
const port = 3000;
const mongodb_url = 'mongodb+srv://idolev:il2407@supportplatformdb.tcdb8n4.mongodb.net/';
app.use(bodyParser.json());
app.use('/usecase', usecaseRoutes_1.default);
app.use('/on-going', OnGoingRoutes_1.default);
app.use('/gw-details', GatewayDetailsRoutes_1.default);
mongoose_1.default
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
//# sourceMappingURL=app.js.map