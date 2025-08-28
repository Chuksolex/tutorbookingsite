import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import dbConnect from "@/lib/mongodb";
import TutorProfile from "@/models/TutorProfile";
import User from "@/models/User";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ message: "Not authenticated" });
  if (session.user.role !== "tutor")
    return res.status(403).json({ message: "Only tutors" });

  await dbConnect();

  if (req.method === "GET") {
    const profile = await TutorProfile.findOne({ user: session.user.id });
    return res.json(profile || {});
  }

  if (req.method === "PUT") {
    const {
      bio,
      subjects,
      ratePerHour,
      photo,
      qualifications,
      experience,
      teachesOnline,
      teachesInPerson,
      location,
      abouttheclass,
    } = req.body;
    const profile = await TutorProfile.findOneAndUpdate(
      { user: session.user.id },
      {
        bio,
        subjects,
        ratePerHour,
        photo,
        qualifications,
        experience,
        teachesOnline,
        teachesInPerson,
        location,
        abouttheclass,
      },
      { upsert: true, new: true }
    );
    // keep user's image in sync if provided
    if (photo) await User.findByIdAndUpdate(session.user.id, { image: photo });
    return res.json(profile);
  }

  return res.status(405).end();
}
