import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
require("dotenv").config();

let server: Server;

const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(`mongodb://localhost:27017/advanced-note-app`);
    // await mongoose.connect(
    //   `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_SECRET_KEY}@cluster0.${process.env.MONGO_DB_URI_SECRET_KEY}.mongodb.net/advanced-note-app?retryWrites=true&w=majority&appName=Cluster0`
    // );
    console.log("connected to mongodb using mongoose");
    server = app.listen(PORT, () => {
      console.log(`App is listing on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
