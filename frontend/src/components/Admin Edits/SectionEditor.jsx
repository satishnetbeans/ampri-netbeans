// @ts-nocheck
// src/components/admin/SectionEditor.jsx
import React, { useState } from 'react';
import ItemEditorModal from './ItemEditor';
import { deleteUpload } from '../../api/axios';

/**
 * SectionEditor
 * - section: section string stored in uploads.section
 * - title: UI title
 * - fields: config passed to ItemEditorModal
 * - items: list of section items (passed from parent, no fetching here)
 * - isAdmin: boolean to show admin actions
 * - onListChange: callback when list changes (e.g., to refresh HomePage data)
 */

export default function SectionEditor({ section, title, fields, items = [], isAdmin = true, onListChange }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(null);

    const createNew = () => { setEditing(null); setModalOpen(true); };
    const editItem = (item) => { setEditing(item); setModalOpen(true); };

    const handleDelete = async (id) => {
        if (!confirm('Delete this item?')) return;
        try {
            await deleteUpload(id);
            onListChange && onListChange(); // parent refresh (HomePage fetch)
        } catch (err) {
            console.error(err);
            alert('Delete failed');
        }
    };

    return (
        <div className="bg-white rounded shadow p-4">
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">{title}</h3>
                {isAdmin && (
                    <button
                        onClick={createNew}
                        className="px-3 py-1 bg-blue-600 text-white rounded"
                    >
                        Add
                    </button>
                )}
            </div>

            <div className="space-y-3">
                {items.length === 0 && <div className="text-sm text-gray-500">No items</div>}
                {items.map((it) => (
                    <div key={it._id} className="flex items-center gap-3 border rounded p-2">
                        <div className="w-24 h-16 overflow-hidden rounded">
                            {it.fileUrl && (
                                /\.(mp4|webm|ogg)$/i.test(it.fileUrl) ? (
                                    <video src={it.fileUrl} controls className="object-cover w-full h-full" />
                                ) : (
                                    <img src={it.fileUrl} alt={it.title} className="object-cover w-full h-full" />
                                )
                            )}
                        </div>

                        <div className="flex-1">
                            <div className="font-medium">{it.title || it.caption || 'Untitled'}</div>
                            <div className="text-sm text-gray-600">{it.fileType}</div>
                        </div>

                        {isAdmin && (
                            <div className="flex flex-col gap-2">
                                <button
                                    onClick={() => editItem(it)}
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
                        )}
                    </div>
                ))}
            </div>

            <ItemEditorModal
                open={modalOpen}
                onClose={() => { setModalOpen(false); setEditing(null); }}
                initial={editing || {}}
                fields={fields}
                section={section}
                onSaved={() => { setModalOpen(false); onListChange && onListChange(); }}
            />
        </div>
    );
}

