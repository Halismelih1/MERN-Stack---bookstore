import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/bookRoute.js";
import cors from "cors";

const mongoDbURI = process.env.mongoDbURI;
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome Our APP");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDbURI)
  .then(() => {
    console.log("App connected to database");
    app.listen(port, () => {
      console.log(`App is listening : ${port} port`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
