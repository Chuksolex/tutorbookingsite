import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['student', 'tutor'],
      default: 'student',
    },
    imageUrl: {
      type: String, // Store Cloudinary URL
      default: 'https://res.cloudinary.com/bemultim/image/upload/c_thumb,w_200,g_face/v1753364833/bazaassets/g5wlab5l1fxxz2lfynpg.jpg',
    },
    location: {
      type: String,
      default: '', // Set later by tutors
    },
    firstFreeUsed: {
      type: Boolean,
      default: false,
    },
   membership: {
  type: {
    status: {
      type: String,
      enum: ['free', 'premium'],
      default: 'free',
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
  },
  default: () => ({ status: 'free', startedAt: Date.now() }), // ✅ function wrapper
},
    resetToken: String,
    resetTokenExpiry: Number,
  },
  { timestamps: true } // Automatically adds createdAt & updatedAt
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
