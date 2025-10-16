// @ts-nocheck
import crypto from "crypto";
import fs from "fs";
import path from "path";
import multer from "multer";

// Temp storage for raw upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, file.originalname),
});

export const upload = multer({ storage });

// Middleware to deduplicate by hash
export const MulterWithoutDuplicate = (req, res, next) => {
  console.log("MulterWithoutDuplicate middleware triggered",req.file);
  // If single file
  if (req.file) {
    req.file.storedPath = processFile(req.file);
  }

  // If multiple files
  if (req.files && Array.isArray(req.files)) {
    req.files = req.files.map((file) => ({
      ...file,
      storedPath: processFile(file),
    }));
  }

  next();
};

// Helper function
function processFile(file) {
  const fileBuffer = fs.readFileSync(file.path);
  const hash = crypto.createHash("sha256").update(fileBuffer).digest("hex");
  const ext = path.extname(file.originalname);
  const finalPath = path.join("uploads", `${hash}${ext}`);

  if (fs.existsSync(finalPath)) {
    fs.unlinkSync(file.path);
  } else {
    fs.renameSync(file.path, finalPath);
  }

  return finalPath;
}

// File upload handler for API
export const handleFileUpload = async (req, res) => {
  try {
    console.log("filleeeeeeeeeeeeeeeeeeeee")
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    if (!req.file.storedPath) {
      return res.status(500).json({ error: 'File processing failed' });
    }

    res.json({
      success: true,
      filePath: req.file.storedPath.replace(/\\/g, "/"),
      filename: path.basename(req.file.storedPath),
      originalName: req.file.originalname,
      size: req.file.size
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'File upload failed',
      details: error.message 
    });
  }
};
