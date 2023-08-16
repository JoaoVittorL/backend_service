import express from "express";
import mongoose from "mongoose";

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

mongoose
  .connect(
    "mongodb+srv://vittorsantos234:T65J04FDmby4iuA6@cluster0.sumddyg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Banco de dados conectado");
  })
  .catch(() => {
    console.log("Deu ruim meu brodi");
  });

app.listen(3000);