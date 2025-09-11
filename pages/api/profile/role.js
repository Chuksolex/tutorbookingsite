import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import TutorProfile from "@/models/TutorProfile";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ message: "Not authenticated" });

  await dbConnect();

  // ✅ Find user by email instead of id
  const user = await User.findOne({ email: session.user.email });
  if (!user) return res.status(404).json({ message: "User not found" });

  // Flip role
  user.role = user.role === "student" ? "tutor" : "student";
  await user.save();

  // Ensure TutorProfile exists if becoming tutor
  if (user.role === "tutor") {
    const exists = await TutorProfile.findOne({ user: user._id });
    if (!exists) {
      await TutorProfile.create({
        user: user._id,
        bio: "",
        subjects: [],
        ratePerHour: 0,
        photo: user.image || "", // ✅ safer: NextAuth default field
        qualifications: "",
        experience: "",
        teachesOnline: false,
        teachesInPerson: false,
        location: "",
        abouttheclass: "",
      });
    }
  }

  return res.json({ ok: true, user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      imageUrl: user.imageUrl,
      role: user.role,
      membership: user.membership,
      tutorProfile: await TutorProfile.findOne({ user: user._id }),// ✅ send back tutor details

    }, });
}

export const config = { api: { bodyParser: true } };
