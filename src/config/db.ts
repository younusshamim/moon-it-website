import mongoose, { type Mongoose } from "mongoose";

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

export const connectToDatabase = async (): Promise<void> => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error("MongoDB URI is not defined in environment variables.");
    }

    const db: Mongoose = await mongoose.connect(mongoUri);

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error(`Error connecting to MongoDB: ${error}`);
  }
};
