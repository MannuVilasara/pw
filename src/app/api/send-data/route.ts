import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user";
import { dbConnect } from "@/lib/connectToDb";

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const data = await request.json();
        const { fullname, email, phone, gender, address } = data;

        if (!fullname || !email || !phone || !gender || !address) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const user = new User({
            fullname,
            email,
            phone,
            gender,
            address,
        });

        await user.save();

        return NextResponse.json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}
