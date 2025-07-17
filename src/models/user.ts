import mongoose, { Schema, Document } from "mongoose";


interface User extends Document {
    fullname: string;
    email: string;
    phone: string;
    gender: "male" | "female";
    address: string;
}

const userSchema = new Schema<User>({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    gender: { type: String, required: true, enum: ["male", "female"] },
    address: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model<User>("User", userSchema);

export { User };