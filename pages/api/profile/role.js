import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]" // export authOptions in that file
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import TutorProfile from "@/models/TutorProfile";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ message: "Not authenticated" });

  await dbConnect();

  const user = await User.findById(session.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  // flip role
  user.role = user.role === "student" ? "tutor" : "student";
  await user.save();

  // ensure TutorProfile exists if becoming tutor
  if (user.role === "tutor") {
    const exists = await TutorProfile.findOne({ user: user._id });
    if (!exists) {
      await TutorProfile.create({
        user: user._id,
        bio: "",
        subjects: [],
        ratePerHour: 0,
        photo: user.imageUrl || "",
        qualifications: "",
        experience: "",
        teachesOnline: false,
        teachesInPerson: false,
        location: "",
        abouttheclass: "",
      });
    }
  }

  return res.json({ ok: true, role: user.role });
}

export const config = { api: { bodyParser: true } };
// to allow large profile photos

