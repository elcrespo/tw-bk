import express from "express";
import { json } from "body-parser";
import { errorHandler } from './common'
import { userDetailsRouter } from "./user-details";

const app = express();
app.use(json());
app.use(userDetailsRouter);
app.listen(8080, () => {
    console.log("Listening on port 8080!!!!!");
});

app.use(errorHandler);