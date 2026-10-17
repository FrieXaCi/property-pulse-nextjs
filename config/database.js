import mongoose from "mongoose";

let connected = false;

const connectBD = async () => {
  mongoose.set("strictQuery", true);
  // is the database is already connected dont connect again
  if (connected) {
    console.log("MongoDB is connected to the database");
    return;
  }
  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectBD;
