// @ts-nocheck
import ContentRenderPage from "../models/contentRenderPages.model.js";
import {
  upload,
  MulterWithoutDuplicate,
} from "../middlewares/MulterWithoutDuplicate.js";

// Helper function to validate page content structure
const validatePageContent = (pageContent) => {
  if (!pageContent) return false;
  if (!pageContent.content) return false;
  if (!pageContent.tabs) return false;

  if (pageContent.content && !Array.isArray(pageContent.content)) return false;
  if (pageContent.tabs && !Array.isArray(pageContent.tabs)) return false;
  console.log("validatePageContent");

  // Cannot have both content and tabs
  if (pageContent.content.length > 0 && pageContent.tabs.length > 0)
    return false;

  return true;
};

// Get all pages with pagination and filtering
export const getPages = async (req, res) => {
  try {
    const {
      category,
      search,
      page = 1,
      limit = 10,
      sortBy = "title",
      sortOrder = "asc",
    } = req.query;

    const query = { isActive: true };

    if (category) query.category = category;
    if (search) {
      query.$text = { $search: search };
    }

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

    const pages = await ContentRenderPage.find(query)
      .sort(sortOptions)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select("-pageContent") // Exclude heavy content for listing
      .lean();

    const total = await ContentRenderPage.countDocuments(query);

    res.json({
      pages,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch pages",
      details: error.message,
    });
  }
};

// Get single page by slug
export const getPageBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const page = await ContentRenderPage.findBySlug(slug);
    if (!page) {
      return res.status(404).json({ error: "Page not found" });
    }

    res.json(page);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch page",
      details: error.message,
    });
  }
};

// Get single page by ID
export const getPageById = async (req, res) => {
  try {
    const { id } = req.params;

    const page = await Page.findById(id);
    if (!page) {
      return res.status(404).json({ error: "Page not found" });
    }

    res.json(page);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch page",
      details: error.message,
    });
  }
};

// Create new page
export const createPage = async (req, res) => {
  try {
    const { title, pageContent, category } = req.body;
    console.log("page    : ", req.body);

    if (!title || !pageContent) {
      return res.status(400).json({
        error: "Title and pageContent are required",
      });
    }

    if (!validatePageContent(pageContent)) {
      return res.status(400).json({
        error: "Invalid pageContent structure",
      });
    }

    // Check if page with same title already exists
    const existingPage = await ContentRenderPage.findOne({
      title: new RegExp(`^${title}$`, "i"),
    });

    if (existingPage) {
      return res.status(400).json({
        error: "Page with this title already exists",
      });
    }

    const newPage = new ContentRenderPage({
      title,
      pageContent,
      category: category || "general",
    });

    console.log("newPage  : ", newPage);
    await newPage.save();

    res.status(201).json({
      message: "Page created successfully",
      page: newPage,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        error: "Validation failed",
        details: error.errors,
      });
    }
    res.status(500).json({
      error: "Failed to create page",
      details: error.message,
    });
  }
};

// Update page
export const updatePage = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, pageContent, category, isActive } = req.body;

    console.log(id);
    console.log(req.body);

    const page = await ContentRenderPage.findById(id);
    if (!page) {
      return res.status(404).json({ error: "Page not found" });
    }

    if (pageContent && !validatePageContent(pageContent)) {
      return res.status(400).json({
        error: "Invalid pageContent structure",
      });
    }

    // Check if title is being changed and if it conflicts with existing page
    if (title && title !== page.title) {
      const existingPage = await ContentRenderPage.findOne({
        title: new RegExp(`^${title}$`, "i"),
        _id: { $ne: id },
      });

      if (existingPage) {
        return res.status(400).json({
          error: "Page with this title already exists",
        });
      }
    }

    const updateData = {};
    if (title) updateData.title = title;
    if (pageContent) updateData.pageContent = pageContent;
    if (category !== undefined) updateData.category = category;
    if (isActive !== undefined) updateData.isActive = isActive;

    updateData.version = page.version + 1;

    const updatedPage = await ContentRenderPage.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    res.json({
      message: "Page updated successfully",
      page: updatedPage,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        error: "Validation failed",
        details: error.errors,
      });
    }
    res.status(500).json({
      error: "Failed to update page",
      details: error.message,
    });
  }
};

// Soft delete page
export const deletePage = async (req, res) => {
  try {
    const { id } = req.params;

    const page = await ContentRenderPage.findByIdAndUpdate(
      id,
      { $set: { isActive: false } },
      { new: true }
    );

    if (!page) {
      return res.status(404).json({ error: "Page not found" });
    }

    res.json({ message: "Page deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete page",
      details: error.message,
    });
  }
};

// Bulk update pages (for reordering, etc.)
export const bulkUpdatePages = async (req, res) => {
  try {
    const { updates } = req.body;

    if (!Array.isArray(updates)) {
      return res.status(400).json({ error: "Updates must be an array" });
    }

    const bulkOperations = updates.map((update) => ({
      updateOne: {
        filter: { _id: update.id },
        update: { $set: update.fields },
      },
    }));

    const result = await ContentRenderPage.bulkWrite(bulkOperations);

    res.json({
      message: "Bulk update completed",
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    res.status(500).json({
      error: "Bulk update failed",
      details: error.message,
    });
  }
};

// Search pages by content
export const searchPages = async (req, res) => {
  try {
    const { q, category, limit = 20 } = req.query;

    if (!q) {
      return res.status(400).json({ error: "Search query is required" });
    }

    const query = {
      isActive: true,
      $text: { $search: q },
    };

    if (category) query.category = category;

    const pages = await ContentRenderPage.find(query)
      .select("title slug category")
      .limit(parseInt(limit))
      .sort({ score: { $meta: "textScore" } })
      .lean();

    res.json({ results: pages });
  } catch (error) {
    res.status(500).json({
      error: "Search failed",
      details: error.message,
    });
  }
};
