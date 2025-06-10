
"use server"
import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {

        const uri = process.env.MONGO_DB_URI || null;
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
    
    return mongoose.connection;
}

export default connectToDatabase;