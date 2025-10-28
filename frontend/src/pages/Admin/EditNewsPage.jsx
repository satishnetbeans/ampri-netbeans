// @ts-nocheck

// src/pages/admin/EditNewsPage.jsx
import React, { useState, useEffect } from 'react';
import { createNews, updateNews, deleteNews } from '../../api/axios';

export default function EditNewsPage({ news }) {
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState({ title: '', link: '' });
    const [items, setItems] = useState(news || []); // local state copy

    // Keep local state in sync if parent prop changes
    useEffect(() => {
        setItems(news || []);
    }, [news]);


    const openEdit = (it) => {
        setEditing(it);
        setForm({ title: it.title, link: it.link });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            if (editing) {
                const updated = await updateNews(editing._id, form);
                setItems(items.map((n) => (n._id === editing._id ? updated.data : n)));
            } else {
                const created = await createNews(form);
                setItems([created.data, ...items]);
            }
            setEditing(null);
            setForm({ title: '', link: '' });
        } catch (err) {
            console.error(err);
            alert('Save failed');
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete news?')) return;
        try {
            await deleteNews(id);
            setItems(items.filter((n) => n._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-xl mb-4">Latest News</h2>

            {/* Form moved to top */}
            <form onSubmit={submit} className="mb-6 max-w-xl bg-white p-4 rounded shadow">
                <h3 className="mb-2 font-semibold">{editing ? 'Edit News' : 'Create News'}</h3>
                <label className="block mb-1">Title</label>
                <input
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full border p-2 rounded mb-2"
                />
                <label className="block mb-1">Link</label>
                <input
                    value={form.link}
                    onChange={(e) => setForm({ ...form, link: e.target.value })}
                    className="w-full border p-2 rounded mb-2"
                />
                <div className="flex gap-2">
                    <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">
                        {editing ? 'Update' : 'Create'}
                    </button>
                    {editing && (
                        <button
                            type="button"
                            onClick={() => { setEditing(null); setForm({ title: '', link: '' }); }}
                            className="px-3 py-1 border rounded"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            {/* News list */}
            <div className="space-y-3">
                {items.map((it) => (
                    <div key={it?._id} className="flex items-center gap-4 border rounded p-2">
                        <div className="flex-1">
                            <div className="font-medium">{it?.title}</div>
                            <div className="text-sm text-gray-600">{it?.link}</div>
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
