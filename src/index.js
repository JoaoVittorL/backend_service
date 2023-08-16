import express from "express";
import connectDataBase from "./database/db.js";

import User from "./models/User.js";

const app = express();

app.use(express.json());

app.get("/users", async (request, response) => {
  const users = await User.find();

  return response.status(200).json(users);
});

app.post("/users", async (request, response) => {
  const user = request.body;

  const newUser = await User.create(user);

  return response.status(201).json(newUser);
});

connectDataBase()
  .then(() => {
    app.listen(3000, () => {
      console.log("Sevidor rondando e banco de dados conectado!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
