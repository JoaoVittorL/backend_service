import mongoose from "mongoose";

async function connectDataBase() {
  await mongoose.connect(
    "mongodb+srv://vittorsantos234:T65J04FDmby4iuA6@cluster0.sumddyg.mongodb.net/?retryWrites=true&w=majority"
  );
}

export default connectDataBase;
