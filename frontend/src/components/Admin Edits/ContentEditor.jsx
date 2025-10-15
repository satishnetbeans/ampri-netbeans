// src/components/ContentEditor.jsx
// @ts-nocheck
import React, { useState, useRef } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
  arrayMove
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { createUpload } from '../../api/axios';

// Define content types
const ContentType = {
  TEXT: "text",
  NUMBER: "number",
  BOOLEAN: "boolean",
  IMAGE: "image",
  VIDEO: "video",
  FILE: "file",
  LINK: "link",
  RICH_TEXT: "rich_text"
};

// Sortable item component
function SortableItem({ id, children }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

// Content item component
function ContentItem({ item, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.value);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleSave = () => {
    onUpdate(item._id, { value: editValue });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(item.value);
    setIsEditing(false);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    // Debug: Check FormData contents
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const { data, error } = await createUpload(formData);

      console.log('Upload response:', data, error);

      if (!error && data) {
        onUpdate(item._id, {
          value: data.data.url,
          metadata: {
            ...item.metadata,
            fileName: file.name,
            originalName: file.name
          }
        });
      }
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const renderContent = () => {
    switch (item.type) {
      case ContentType.TEXT:
      case ContentType.RICH_TEXT:
        return isEditing ? (
          <div className="space-y-2">
            <textarea
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full p-2 border rounded"
              rows={4}
            />
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div
            className="p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => setIsEditing(true)}
          >
            <p className="whitespace-pre-wrap">{item.value}</p>
          </div>
        );

      case ContentType.IMAGE:
        return (
          <div className="p-3 bg-gray-50 rounded">
            {item.value ? (
              <div>
                <img
                  src={item.value}
                  alt={item.metadata?.altText || ''}
                  className="max-w-full h-auto rounded mb-2"
                />
                <button
                  onClick={triggerFileInput}
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Change Image'}
                </button>
              </div>
            ) : (
              <div className="border-dashed border-2 border-gray-300 rounded p-4 text-center">
                <p className="text-gray-500 mb-2">No image uploaded</p>
                <button
                  onClick={triggerFileInput}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Upload Image'}
                </button>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              ref={fileInputRef}
              disabled={isUploading}
            />
            <div className="mt-2">
              <input
                type="text"
                value={item.metadata?.altText || ''}
                onChange={(e) => onUpdate(item._id, {
                  metadata: { ...item.metadata, altText: e.target.value }
                })}
                placeholder="Alt text"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        );

      case ContentType.VIDEO:
        return (
          <div className="p-3 bg-gray-50 rounded">
            {item.value ? (
              <div>
                <video
                  src={item.value}
                  controls
                  className="max-w-full h-auto rounded mb-2"
                />
                <button
                  onClick={triggerFileInput}
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Change Video'}
                </button>
              </div>
            ) : (
              <div className="border-dashed border-2 border-gray-300 rounded p-4 text-center">
                <p className="text-gray-500 mb-2">No video uploaded</p>
                <button
                  onClick={triggerFileInput}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Upload Video'}
                </button>
              </div>
            )}
            <input
              type="file"
              accept="video/*"
              onChange={handleFileUpload}
              className="hidden"
              ref={fileInputRef}
              disabled={isUploading}
            />
          </div>
        );

      case ContentType.FILE:
        return (
          <div className="p-3 bg-gray-50 rounded">
            {item.value ? (
              <div>
                <a
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline block mb-2"
                >
                  {item.metadata?.fileName || 'Download file'}
                </a>
                <button
                  onClick={triggerFileInput}
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Change File'}
                </button>
              </div>
            ) : (
              <div className="border-dashed border-2 border-gray-300 rounded p-4 text-center">
                <p className="text-gray-500 mb-2">No file uploaded</p>
                <button
                  onClick={triggerFileInput}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Upload File'}
                </button>
              </div>
            )}
            <input
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              ref={fileInputRef}
              disabled={isUploading}
            />
          </div>
        );

      case ContentType.LINK:
        return (
          <div className="p-3 bg-gray-50 rounded">
            <a
              href={item.value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {item.value}
            </a>
            <div className="mt-2">
              <input
                type="text"
                value={item.value}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={() => onUpdate(item._id, { value: editValue })}
                className="w-full p-2 border rounded"
                placeholder="Link URL"
              />
            </div>
          </div>
        );

      case ContentType.BOOLEAN:
        return (
          <div className="p-3 bg-gray-50 rounded flex items-center">
            <input
              type="checkbox"
              checked={item.value}
              onChange={(e) => onUpdate(item._id, { value: e.target.checked })}
              className="mr-2"
            />
            <span>{item.value ? 'True' : 'False'}</span>
          </div>
        );

      case ContentType.NUMBER:
        return isEditing ? (
          <div className="space-y-2">
            <input
              type="number"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div
            className="p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => setIsEditing(true)}
          >
            <p>{item.value}</p>
          </div>
        );

      default:
        return (
          <div className="p-3 bg-gray-50 rounded">
            <p className="text-gray-500">Unsupported content type: {item.type}</p>
          </div>
        );
    }
  };

  return (
    <div className="mb-4 border rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-gray-100 px-3 py-2">
        <span className="text-sm font-medium text-gray-700 capitalize">
          {item.type.replace('_', ' ')}
        </span>
        <button
          onClick={() => onDelete(item._id)}
          className="text-red-500 hover:text-red-700"
        >
          ❌
        </button>
      </div>
      <div className="p-3">
        {renderContent()}
      </div>
    </div>
  );
}

// Main ContentEditor component
export default function ContentEditor({ content, onAddContent, onUpdateContent, onDeleteContent, onReorderContent }) {
  const [selectedType, setSelectedType] = useState(ContentType.TEXT);
  const [newContentValue, setNewContentValue] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleAddContent = async () => {
    if (!newContentValue.trim() && !['image', 'video', 'file'].includes(selectedType)) return;

    const contentItem = {
      type: selectedType,
      value: newContentValue,
      metadata: {},
      order: content.length
    };

    onAddContent(contentItem);
    setNewContentValue('');
  };

  const handleAddFileContent = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    console.log("uploaaaaaaaaaaading      :  ", file)
    // Debug: Check FormData contents
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    console.log("i am form data       :  ", formData)

    try {
      const { data, error } = await createUpload(formData);

      console.log('Upload response 2 :', data, error);

      if (!error && data) {
        const contentItem = {
          type: selectedType,
          value: data.data.url,
          metadata: {
            fileName: file.name,
            originalName: file.name
          },
          order: content.length
        };

        onAddContent(contentItem);
      }
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = content.findIndex(item => item._id === active.id);
      const newIndex = content.findIndex(item => item._id === over.id);

      const reorderedContent = arrayMove(content, oldIndex, newIndex);
      onReorderContent(reorderedContent.map(item => item._id));
    }
  };

  return (
    <div className="content-editor">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Content Items</h3>

        {/* Add new content form */}
        <div className="flex space-x-2 mb-4 items-center">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="p-2 border rounded"
          >
            {Object.values(ContentType).map(type => (
              <option key={type} value={type}>
                {type.replace('_', ' ').toUpperCase()}
              </option>
            ))}
          </select>

          {['image', 'video', 'file'].includes(selectedType) ? (
            <div className="flex-1 flex items-center">
              <button
                onClick={triggerFileInput}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={isUploading}
              >
                {isUploading ? 'Uploading...' : `Choose ${selectedType} file`}
              </button>
              <input
                type="file"
                onChange={handleAddFileContent}
                className="hidden"
                ref={fileInputRef}
                accept={selectedType === 'image' ? 'image/*' : selectedType === 'video' ? 'video/*' : '*'}
                disabled={isUploading}
              />
            </div>
          ) : (
            <>
              <input
                type="text"
                value={newContentValue}
                onChange={(e) => setNewContentValue(e.target.value)}
                placeholder="Enter content value"
                className="flex-1 p-2 border rounded"
              />
              <button
                onClick={handleAddContent}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add
              </button>
            </>
          )}
        </div>

        {/* Content items list */}
        {content.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No content items yet. Add one above.</p>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={content.map(item => item._id)} strategy={verticalListSortingStrategy}>
              {content.map(item => (
                <SortableItem key={item._id} id={item._id}>
                  <ContentItem
                    item={item}
                    onUpdate={onUpdateContent}
                    onDelete={onDeleteContent}
                  />
                </SortableItem>
              ))}
            </SortableContext>
          </DndContext>
        )}
      </div>
    </div>
  );
}

