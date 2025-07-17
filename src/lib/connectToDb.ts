import mongoose from "mongoose";
import { config } from "dotenv";
config();



const DB_NAME = "pw";

const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        await mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_URI || ""}/${DB_NAME}`);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
    }
}

export { dbConnect };