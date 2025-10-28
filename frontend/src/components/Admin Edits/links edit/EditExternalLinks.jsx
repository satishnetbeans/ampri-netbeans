// @ts-nocheck
import React, { useState, useEffect } from "react";
import {
  updateExternalLink,
  deleteExternalLink,
  createExternalLink,
  fileUpload
} from "../../../api/axios";

import checkBaseURL from "../../../utils/CheckBaseUrl";

export default function EditExternalLinks({ AllLinks, setisTogggleOpen }) {
  const baseUrl = checkBaseURL();



  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ img: "", alt: "", link: "" });
  const [items, setItems] = useState(AllLinks || []);
  const [uploading, setUploading] = useState(false);

 
  useEffect(() => {
    setItems(AllLinks || []);
  }, [AllLinks]);

  const openEdit = (it) => {
    setEditing(it);
    setForm({ img: it.img, alt: it.alt, link: it.link });
  };

  // ✅ File Upload Handler
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fileUpload(formData);

      console.log("file upload response : ", response);

      if (response.error) throw new Error("Upload failed");

      const result = await response.data;
      const filePath = result.path || result.filePath;
      setForm({ ...form, img: filePath });

    } catch (error) {
      console.error("Upload error:", error);
      alert("File upload failed");
    }
    setUploading(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        const updated = await updateExternalLink(editing._id, form);
        setItems(items.map((n) => (n._id === editing._id ? updated.data : n)));
      } else {
        const created = await createExternalLink(form);
        setItems([created.data, ...items]);
      }
      setEditing(null);
      setForm({ img: "", alt: "", link: "" });
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this link?")) return;
    try {
      await deleteExternalLink(id);
      setItems(items.filter((n) => n._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 fixed top-0 left-0 w-[100vw] h-[100vh] bg-white bg-opacity-90 z-50 overflow-auto">
      <h2 className="text-xl mb-4 font-semibold">External Links</h2>

      {/* Close button */}
      <div
        onClick={() => setisTogggleOpen(false)}
        className="bg-blue-700 hover:bg-blue-500 text-lg font-semibold text-white absolute right-4 top-4 rounded-lg py-1 px-3 cursor-pointer"
      >
        Cancel
      </div>

      {/* Form */}
      <form
        onSubmit={submit}
        className="mb-6 max-w-xl bg-white p-4 rounded shadow"
      >
        <h3 className="mb-2 font-semibold">
          {editing ? "Edit External Link" : "Create External Link"}
        </h3>

        {/* ✅ Image Upload */}
        <label className="block mb-1 font-medium">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="w-full border p-2 rounded mb-2"
        />
        {uploading && (
          <div className="text-sm text-gray-500 mb-2">Uploading...</div>
        )}
        {form.img && (
          <div className="mb-2">
            <img
              src={form.img.startsWith("uploads/") ? `${baseUrl}/${form.img}` : form.img}
              alt={form.alt || "preview"}
              className="w-[150px] h-[90px] object-contain rounded border"
            />
          </div>
        )}

        

        <label className="block mb-1 font-medium">Alt Text</label>
        <input
          value={form.alt}
          onChange={(e) => setForm({ ...form, alt: e.target.value })}
          placeholder="Descriptive name (e.g., Make in India)"
          className="w-full border p-2 rounded mb-2"
        />

        <label className="block mb-1 font-medium">External Link</label>
        <input
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          placeholder="https://example.com"
          className="w-full border p-2 rounded mb-4"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="px-3 py-1 bg-blue-600 text-white rounded"
            disabled={uploading}
          >
            {editing ? "Update" : "Create"}
          </button>
          {editing && (
            <button
              type="button"
              onClick={() => {
                setEditing(null);
                setForm({ img: "", alt: "", link: "" });
              }}
              className="px-3 py-1 border rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Links List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <div
            key={it?._id}
            className="flex flex-col border rounded-lg p-3 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-center mb-2">
              {it?.img ? (
                <img
                  src={it.img.startsWith("uploads/") ? `${baseUrl}/${it.img}` : it.img}
                  alt={it.alt}
                  className="w-[150px] h-[90px] object-contain rounded"
                />
              ) : (
                <div className="w-[150px] h-[90px] bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  No Image
                </div>
              )}
            </div>
            <div className="text-center mb-2 font-medium">{it?.alt}</div>
            <a
              href={it?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 underline break-all text-center"
            >
              {it?.link}
            </a>

            <div className="flex justify-center gap-2 mt-3">
              <button
                onClick={() => openEdit(it)}
                className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(it._id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-400"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

