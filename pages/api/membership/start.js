import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ message: "Not authenticated" });
  await dbConnect();

  const user = await User.findByIdAndUpdate(
    session.user.id,
    { membership: { status: "premium", since: new Date() } },
    { new: true }
  );

  return res.json({ ok: true, membership: user.membership });
}
