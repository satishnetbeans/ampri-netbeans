// @ts-nocheck

// // src/pages/admin/EditDirectorPage.jsx
import React, { useState } from 'react';
import ItemEditorModal from '../../components/Admin Edits/ItemEditor';


const directorFields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'designation', label: 'Designation', type: 'text' },
  { name: 'message', label: 'Message', type: 'textarea' },
  { name: 'image', label: 'Photo', type: 'file', accept: 'image/*' },
];

export default function EditDirectorPage({ director }) {
  const [open, setOpen] = useState(false);


  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Director</h2>
      <div className="bg-white rounded shadow p-4 mb-4 max-w-3xl">
        <div className="flex gap-4 items-start">
          <div className="w-28 h-28 overflow-hidden rounded">
            {director?.image && <img src={director.image} alt={director.name} className="object-cover w-full h-full" />}
          </div>
          <div>
            <div className="font-semibold">{director?.name}</div>
            <div className="text-sm text-gray-600">{director?.designation}</div>
            <p className="mt-2 text-sm">{director?.message?.slice(0, 220)}{director?.message?.length > 220 ? '...' : ''}</p>
          </div>
        </div>
        <div className="mt-4">
          <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={() => setOpen(true)}>Edit Director</button>
        </div>
      </div>

      <ItemEditorModal
        open={open}
        onClose={() => setOpen(false)}
        initial={director || {}}
        fields={directorFields}
        section="director"
        onSaved={() => {
          setOpen(false);
          alert('Director updated, refresh to see changes');
        }}
      />
    </div>
  );
}

