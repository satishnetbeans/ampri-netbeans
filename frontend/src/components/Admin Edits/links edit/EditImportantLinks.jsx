// @ts-nocheck
import React, { useState, useEffect } from "react";
import {
  updateImportantLink,
  deleteImportantLink,
  createImportantLink,
} from "../../../api/axios";

export default function EditImportantLinks({ AllLinks ,setisTogggleOpen }) {
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", url: "" });
  const [items, setItems] = useState(AllLinks || []);

  useEffect(() => {
    setItems(AllLinks || []);
  }, [AllLinks]);

  const openEdit = (it) => {
    setEditing(it);
    setForm({ name: it.name, url: it.url });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        const updated = await updateImportantLink(editing._id, form);
        setItems(items.map((n) => (n._id === editing._id ? updated.data : n)));
      } else {
        const created = await createImportantLink(form);
        setItems([created.data, ...items]);
      }
      setEditing(null);
      setForm({ name: "", url: "" });
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this link?")) return;
    try {
      await deleteImportantLink(id);
      setItems(items.filter((n) => n._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 fixed top-0 left-0 w-[100vw] h-[100vh] bg-white bg-opacity-50 z-50 overflow-auto">
      <h2 className="text-xl mb-4">Important Links</h2>
      <div onClick={()=> setisTogggleOpen(false)} className="bg-blue-700 hover:bg-blue-500 text-lg font-semibold text-white absolute right-4 top-4 rounded-lg py-1 px-2 cursor-pointer ">cancel</div>

      {/* Form */}
      <form
        onSubmit={submit}
        className="mb-6 max-w-xl bg-white p-4 rounded shadow"
      >
        <h3 className="mb-2 font-semibold">
          {editing ? "Edit Link" : "Create Link"}
        </h3>

        <label className="block mb-1">Name</label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded mb-2"
        />

        <label className="block mb-1">URL</label>
        <input
          value={form.url}
          onChange={(e) => setForm({ ...form, url: e.target.value })}
          className="w-full border p-2 rounded mb-2"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            {editing ? "Update" : "Create"}
          </button>
          {editing && (
            <button
              type="button"
              onClick={() => {
                setEditing(null);
                setForm({ name: "", url: "" });
              }}
              className="px-3 py-1 border rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Links list */}
      <div className="space-y-3">
        {items.map((it) => (
          <div
            key={it?._id}
            className="flex items-center gap-4 border rounded p-2 bg-white"
          >
            <div className="flex-1">
              <div className="font-medium">{it?.name}</div>
              <a
                href={it?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 underline break-all"
              >
                {it?.url}
              </a>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => openEdit(it)}
                className="px-2 py-1 bg-yellow-400 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(it._id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
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
