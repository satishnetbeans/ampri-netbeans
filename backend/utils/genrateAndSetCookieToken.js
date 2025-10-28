import jwt from "jsonwebtoken";

export const generateAndSetCookieToken = (res, admin) => {
  const token = jwt.sign(
    {
      id: admin._id,
      username: admin.username,
      email: admin.email,
      role: admin.role,
      title: admin.title,
      access: admin.access,
      accessModules: admin.accessModules,
      is2FAEnabled: admin.is2FAEnabled,
    },
    process.env.JWT_SECRET,
    { expiresIn: "36h" }
  );

  // set cookie
  res.cookie("token", token, {
    httpOnly: true, // prevents JS access (XSS safe)
    secure: process.env.NODE_ENV === "production", // only https in prod
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // CSRF protection
    maxAge: 60 * 60 * 1000 * 24, // 24 hour
  });

  return token;
};
