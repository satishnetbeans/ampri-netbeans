// middlewares/authAdmin.js
import jwt from "jsonwebtoken";

export const authAdmin = (req, res, next) => {
  try {
    const token = req.cookies?.token; // JWT is in cookies
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    console.log("tokennnnnnnnnnnnnnnnnnnnnn ");
    console.log("token : ", req.cookies?.token);
    console.log("process.env.JWT_SECRET : ", process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded : ", decoded);

    if (decoded.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Forbidden: Access can't be allowed" });
    }

    req.user = decoded; // attach decoded data to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
