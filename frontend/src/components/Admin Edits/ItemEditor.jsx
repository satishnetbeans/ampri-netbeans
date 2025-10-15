// @ts-nocheck
// // src/components/admin/ItemEditorModal.jsx
import React, { useEffect, useState } from 'react';
import FileInput from './FileInput';
import { createUpload, updateUpload } from '../../api/axios';
import { updateDirector } from '../../api/axios';


export default function ItemEditorModal({ open, onClose, initial = {}, fields = [], section = '', onSaved }) {
  const [form, setForm] = useState({});
  const [files, setFiles] = useState({}); // fieldName -> File
  const [fileType, setfileType] = useState('');
  console.log("form and files : ", form, fields, files);

  useEffect(() => {
    setForm(initial || {});
    setFiles({});
  }, [initial, open]);

  if (!open) return null;

  const setField = (name, value) => setForm((p) => {
    console.log("setting field", name, value);
    return { ...p, [name]: value }

  });

  const handleFileSelected = (fieldName, file) => {
    setFiles((p) => ({ ...p, [fieldName]: file }));
    // also set a preview URL in form (optional)
    if (file) setForm((p) => ({ ...p, [fieldName]: URL.createObjectURL(file) }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      // If editing director (special-case), call director API
      if (section === 'director') {
        const fd = new FormData();
        for (const f of fields) {
          const val = form[f.name];
          if (f.type === 'file') {
            // attach file under the field name (directorApi expects 'image')
            if (files[f.name]) fd.append(f.name, files[f.name]);
            else if (typeof val === 'string') fd.append(f.name, val);
          } else if (val !== undefined) {
            fd.append(f.name, val);
          }
        }
        await updateDirector(form._id, fd);
        onSaved && onSaved();
        onClose && onClose();
        return;
      }

      // Generic uploads create/update
      const fd = new FormData();
      // attach all simple fields (title, fileType, etc.)
      fields.forEach((f) => {
        if (f.type === 'file') return; // handled later
        const v = form[f.name];
        if (v !== undefined && v !== null) fd.append(f.name, v);
      });
      // always include section for uploads
      fd.append('section', section);

      // attach files under 'file' (backend expected name)
      // we will append first file found in files map or specific field named 'file' if present
      // convention: field.type==='file' must have name 'file' for uploads
      Object.entries(files).forEach(([k, file]) => {
        if (file instanceof File) {
          // for uploads model we will send as 'file' (server should save and return fileUrl)
          // but also include field name to know which field to update if you have multiple
          fd.append(k, file);
        }
      });

      let res;
      if (initial && initial._id) {
        res = await updateUpload(initial._id, fd);
        if (res.data) {
          alert('Update successful');
        } else {
          alert('Update failed');
        }

      } else {
        res = await createUpload(fd);
        if (res.data) {
          alert('Creation successful');
        } else {
          alert('Creation failed');
        }
      }

      onSaved && onSaved(res.data);
      onClose && onClose();
    } catch (err) {
      console.error(err);
      alert('Save failed — check console');
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-start justify-center p-6 bg-black/40">
      <form onSubmit={submit} className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[85vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{initial?._id ? 'Edit item' : 'Create item'}</h3>
          <button type="button" onClick={onClose} className="px-2 py-1">Close</button>
        </div>

        <div className="space-y-4">
          {fields.map((f) => {
            const val = form[f.name] ?? '';
            if (f.type === 'text' || f.type === 'url' || f.type === 'number' ) {
              return (
                <div key={f.name}>
                  <label className="block mb-1 font-medium">{f.label}</label>
                  <input
                    value={val}
                    onChange={(e) => setField(f.name, e.target.value)}
                    type={f.type === 'number' ? 'number' : 'text'}
                    className="w-full border p-2 rounded"
                    placeholder={f.placeholder || ''}
                  />
                </div>
              );
            }

            


            if (f.type === 'select') {
              return (
                <div key={f.name}>
                  <label className="block mb-1 font-medium">{f.label}</label>
                  <select value={fileType ? fileType : val} className="w-full border p-2 rounded">
                    <option value="">— choose —</option>
                    {(f.options || []).map((opt) => (
                      <option key={opt.value ?? opt} value={opt.value ?? opt}>
                        {opt.label ?? opt}
                      </option>
                    ))}
                  </select>
                </div>
              );
            }


            if (f.type === 'file') {
              return (
                <div key={f.name}>
                  <label className="block mb-1 font-medium">{f.label}</label>
                  <FileInput
                    value={form[f.name] || initial[f.name] || ''}
                    accept={f.accept || 'image/*,video/*'}
                    onFileSelected={(file) => handleFileSelected(f.name, file)}
                    initial={initial}
                    fileType={fileType}
                    setFileType={setfileType}
                    setField={setField}
                  />
                </div>
              );
            }

            if (f.type === "textarea") {
              return (
                <div key={f.name}>
                  <label className="block mb-1 font-medium">{f.label}</label>
                  <textarea
                    value={val}
                    onChange={(e) => setField(f.name, e.target.value)}
                    type={f.type === 'number' ? 'number' : 'text'}
                    className="w-full h-[15vh] border p-2 rounded"
                    placeholder={f.placeholder || ''}
                  />
                </div>
              );
            }

            return null;
          })}
        </div>

        <div className="mt-6 flex gap-2 justify-end">
          <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">{initial?._id ? 'Save' : 'Create'}</button>
        </div>
      </form>
    </div>
  );
}
