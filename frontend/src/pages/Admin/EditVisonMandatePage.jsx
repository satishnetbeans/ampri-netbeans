// @ts-nocheck
import React, { useState, useEffect } from "react";
import { updateVisionMandate } from "../../api/axios";

export default function EditVisionMandatePage({ visionMandate }) {
  const [form, setForm] = useState({
    vision: "",
    mandate: "",
  });

  const [docId, setDocId] = useState(null);

  // When visionMandate prop updates, sync it into state
  useEffect(() => {
    if (visionMandate && visionMandate.length > 0) {
      const data = visionMandate[0];
      setForm({
        vision: data.vision || "",
        mandate: data.mandate || "",
      });
      setDocId(data._id);
    }
  }, [visionMandate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!docId) {
      alert("No vision/mandate document found to update.");
      return;
    }
    try {
      const res = await updateVisionMandate(docId, form);
      if (!res.error) {
        alert("Vision & Mandate updated successfully!");
      } else {
        alert("Update failed: " + res.error);
      }
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Vision & Mandate</h2>
      <form onSubmit={submit} className="space-y-4 bg-white p-4 rounded shadow">
        {/* Vision Input */}
        <div>
          <label className="block mb-1 font-medium">Vision</label>
          <textarea
            name="vision"
            value={form.vision}
            onChange={handleChange}
            className="w-full border rounded p-2 h-28"
            placeholder="Enter vision statement"
          />
        </div>

        {/* Mandate Input */}
        <div>
          <label className="block mb-1 font-medium">
            Mandate (separate multiple points with commas)
          </label>
          <textarea
            name="mandate"
            value={form.mandate}
            onChange={handleChange}
            className="w-full border rounded p-2 h-28"
            placeholder="e.g. Research in advanced materials, Support industry, Train manpower"
          />
          <p className="text-sm text-gray-500 mt-1">
            Current mandates:{" "}
            {form.mandate
              ?.split(",")
              .map((m) => m.trim())
              .filter(Boolean)
              .join(" | ")}
          </p>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Update
        </button>
      </form>
    </div>
  );
}
