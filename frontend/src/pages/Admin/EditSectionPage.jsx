// @ts-nocheck

// src/pages/admin/EditSectionPage.jsx
import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SectionEditor from "../../components/Admin Edits/SectionEditor";

// 🔹 Default fields for generic uploads
const defaultUploadFields = [
  { name: "title", label: "Title", type: "text", required: true },
  {
    name: "file",
    label: "Image / Video",
    type: "file",
    accept: "image/*,video/*",
  },
  {
    name: "fileType",
    label: "File type",
    type: "select",
    options: [
      { value: "image", label: "Image" },
      { value: "video", label: "Video" },
    ],
  },
];

export default function EditSectionPage({ sectionUploads = [] }) {
  const { section } = useParams(); // e.g., banner, facility, print media
  const navigate = useNavigate();

  const normalizedSection = decodeURIComponent(section || "");

  // 🔹 Filter uploads for this section
  const sectionItems = useMemo(() => {
    return sectionUploads.filter(
      (item) =>
        item.section?.toLowerCase() === normalizedSection.toLowerCase()
    );
  }, [sectionUploads, normalizedSection]);

  // 🔹 Decide field config based on section
  const fields = useMemo(() => {
    if (/banner/i.test(normalizedSection)) {
      return [
        { name: "title", label: "Title", type: "text" },
        { name: "caption", label: "Caption", type: "textarea" },
        {
          name: "file",
          label: "Image / Video",
          type: "file",
          accept: "image/*,video/*",
        },
        {
          name: "fileType",
          label: "File type",
          type: "select",
          options: [
            { value: "image", label: "Image" },
            { value: "video", label: "Video" },
          ],
        },
      ];
    }

    if (/print media/i.test(normalizedSection) || /updates @/i.test(normalizedSection)) {
      return [
        { name: "title", label: "Title", type: "text" },
        {
          name: "file",
          label: "Image / Video",
          type: "file",
          accept: "image/*,video/*",
        },
        {
          name: "fileType",
          label: "File type",
          type: "select",
          options: [
            { value: "image", label: "Image" },
            { value: "video", label: "Video" },
          ],
        },
      ];
    }

    // default
    return defaultUploadFields;
  }, [normalizedSection]);

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-3 py-1 border rounded"
      >
        Back
      </button>
      <h2 className="text-xl mb-4">Edit section: {normalizedSection}</h2>

      {/* 🔹 Pass only filtered items */}
      <SectionEditor
        section={normalizedSection}
        title={normalizedSection}
        fields={fields}
        items={sectionItems}
        
      />
    </div>
  );
}

