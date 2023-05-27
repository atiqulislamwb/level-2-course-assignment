import mongoose from "mongoose";
import app from "./app";
const port: number = 5000;

async function db() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Connection to DB success");
  } catch (error) {
    console.log(error.message);
  }
}

app.listen(port, () => {
  db();
  console.log(`Server is listening on port ${port}`);
});

// Nothing will happen here
