import mongoose from "mongoose";

const TutorProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
    bio: String,
    title: String,
    qualifications: String,
    subjects: [String],
    experience: String,
    teachesOnline: { type: Boolean, default: false },
    teachesInPerson: { type: Boolean, default: false },
    location: String,
    abouttheclass: String,
    ratePerHour: { type: Number, default: 0 },
    photo: String,
    // ⭐ Ratings & Reviews
  rating: { type: Number, default: 0 }, // avg rating
  reviewsCount: { type: Number, default: 0 },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, min: 1, max: 5 },
      comment: String,
      createdAt: { type: Date, default: Date.now },
      
    },
  ],
  },

  { timestamps: true }

);

export default mongoose.models.TutorProfile || mongoose.model("TutorProfile", TutorProfileSchema);

