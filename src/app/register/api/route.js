import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    console.log(newUser);
    const isExist = await userCollection.findOne({ email: newUser?.email, provider: "credential" });
    if (isExist) {
      return NextResponse.json({ message: "User Exists" }, { status: 409 });
    }
    await userCollection.insertOne({...newUser, provider: "credential"});
    return NextResponse.json({ message: "User Created", created: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something Went Wrong" },
      { status: 500 }
    );
  }
};
