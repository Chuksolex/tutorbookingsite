

import mongoose from "mongoose";

const CustomRequestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: Number },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // student
}, { timestamps: true });

export default mongoose.models.CustomRequest || mongoose.model("CustomRequest", CustomRequestSchema);

