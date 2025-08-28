


import dbConnect from '../../../lib/mongodb';
import User from "../../../models/User";
import bcrypt from "bcrypt";


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, password, role } = req.body;

  try {
    await dbConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });
    const passwordHash = await bcrypt.hash(password, 10);


    const newUser = new User({ name, email, password: passwordHash , role });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
    console.log("New user created:", newUser);
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
