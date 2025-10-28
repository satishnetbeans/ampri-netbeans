import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema(
  {
    username: {
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

    title: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      required: true,
      enum: ["Super Admin", "Admin", "Editor", "Member"],
    },

    twoFASecret: {
      type: String,
    },

    is2FAEnabled : {
      type: Boolean,
      default :false
    },

    access: {
      type: String,
      required: true,
      enum: ["Full", "Partial", "Restricted"],
      default: "Restricted",
    },

    // 👇 corresponds to "accessModules" from frontend
    accessModules: [
      {
        title: { type: String, trim: true },
        routes: [{ type: String, trim: true }],
      },
    ],

    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

//
// 🔒 Pre-save: hash password if modified
//
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

//
// 🔑 Method to compare password (for login/auth)
//
adminSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

//
// 🧩 Method to safely update password
//
adminSchema.methods.updatePassword = async function (newPassword) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(newPassword, salt);
  return this.save();
};

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
