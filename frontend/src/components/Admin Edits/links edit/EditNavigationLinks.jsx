// @ts-nocheck
import React, { useState, useEffect } from "react";
import {
  updateNavigationLink, // used for updating a section
  deleteNavigationLink, // used for deleting a section
  createNavigationLink, // used for creating a section
} from "../../../api/axios";


export default function EditNavigationLinks({ AllLinks, setisTogggleOpen }) {
  const [sections, setSections] = useState(AllLinks || []);
  const [editingSection, setEditingSection] = useState(null); // full section being edited
  const [form, setForm] = useState({
    title: "",
    links: [{ name: "", url: "" }],
  });

  useEffect(() => {
    setSections(AllLinks || []);
  }, [AllLinks]);

  const handleAddLinkField = () => {
    setForm({
      ...form,
      links: [...form.links, { name: "", url: "" }],
    });
  };

  const handleRemoveLinkField = (index) => {
    const updatedLinks = [...form.links];
    updatedLinks.splice(index, 1);
    setForm({ ...form, links: updatedLinks });
  };

  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...form.links];
    updatedLinks[index][field] = value;
    setForm({ ...form, links: updatedLinks });
  };

  const openEdit = (section) => {
    setEditingSection(section);
    setForm({
      title: section.title,
      links: section.links.map((l) => ({ name: l.name, url: l.url })),
    });
  };

  const resetForm = () => {
    setEditingSection(null);
    setForm({ title: "", links: [{ name: "", url: "" }] });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (editingSection) {
        // Update existing document
        const updated = await updateNavigationLink(editingSection._id, form);
        setSections(
          sections.map((s) =>
            s._id === editingSection._id ? updated.data : s
          )
        );
      } else {
        // Create new document
        const created = await createNavigationLink(form);
        setSections([created.data, ...sections]);
      }
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this section?")) return;
    try {
      await deleteNavigationLink(id);
      setSections(sections.filter((s) => s._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 fixed top-0 left-0 w-[100vw] h-[100vh] bg-white bg-opacity-90 z-50 overflow-auto">
      <h2 className="text-xl mb-4 font-semibold">Navigation Links</h2>

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
        className="mb-6 max-w-2xl bg-white p-4 rounded shadow"
      >
        <h3 className="mb-2 font-semibold">
          {editingSection ? "Edit Section" : "Create New Section"}
        </h3>

        {/* Title Input */}
        <label className="block mb-1 font-medium">Section Title</label>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="e.g., Intranet, Publications"
          className="w-full border p-2 rounded mb-4"
          required
        />

        {/* Dynamic Links */}
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          {form.links.map((link, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                value={link.name}
                onChange={(e) =>
                  handleLinkChange(index, "name", e.target.value)
                }
                placeholder="Link Name"
                className="border p-2 rounded flex-1"
                required
              />
              <input
                value={link.url}
                onChange={(e) =>
                  handleLinkChange(index, "url", e.target.value)
                }
                placeholder="https://example.com"
                className="border p-2 rounded flex-1"
                required
              />
              {form.links.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveLinkField(index)}
                  className="bg-red-500 text-white px-2 rounded"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddLinkField}
            className="text-blue-600 text-sm underline mb-4"
          >
            + Add Another Link
          </button>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            type="submit"
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            {editingSection ? "Update Section" : "Create Section"}
          </button>
          {editingSection && (
            <button
              type="button"
              onClick={resetForm}
              className="px-3 py-1 border rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Existing Sections */}
      <div className="space-y-6">
        {sections.map((section) => (
          <div
            key={section._id}
            className="border rounded-lg bg-white shadow-sm p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-[700] text-lg text-blue-900">{section.title}</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => openEdit(section)}
                  className="px-3 py-1 bg-yellow-400 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(section._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="space-y-1">
              {section.links.map((l) => (
                <div
                  key={l._id || l.name}
                  className="flex justify-between items-center border-t py-1"
                >
                  <div>
                    <div className="font-medium">{l.name}</div>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 underline break-all"
                    >
                      {l.url}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


