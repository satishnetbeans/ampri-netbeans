// @ts-nocheck
import React, { useState, useEffect } from "react";
import { fileUploadContentRenderPage } from "../../api/axios";
import checkBaseURL from "../../utils/CheckBaseUrl";

function EditContentRender({ contentData, onSave, onCancel }) {
  const baseURl = checkBaseURL()

  const [editedData, setEditedData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [uploading, setUploading] = useState(false);

  console.log("editedData  :  ", editedData)
  console.log("contentData  :  ", contentData)

  // Initialize edited data
  useEffect(() => {
    if (contentData) {
      setEditedData(JSON.parse(JSON.stringify(contentData)));
    }
  }, [contentData]);

  if (!editedData) return <div>Loading...</div>;

  // Handle file upload
  const handleFileUpload = async (file, fieldName, index = null, itemIndex = null) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fileUploadContentRenderPage(formData)

      console.log("file uplload response : ", response)

      if (response.error) throw new Error("Upload failed");

      const result = await response.data;
      const filePath = result.path || result.filePath;

      // Update the appropriate field
      setEditedData(prev => {
        const newData = JSON.parse(JSON.stringify(prev));

        if (index !== null && itemIndex !== null) {
          // Update imagesList item
          if (newData.pageContent.tabs.length > 0) {
            newData.pageContent.tabs[activeTab].content[index].imagesListItems[itemIndex][fieldName] = filePath;
          } else {
            newData.pageContent.content[index].imagesListItems[itemIndex][fieldName] = filePath;
          }
        } else if (index !== null) {
          // Update tab content
          if (newData.pageContent.tabs.length > 0) {
            newData.pageContent.tabs[activeTab].content[index][fieldName] = filePath;
          } else {
            newData.pageContent.content[index][fieldName] = filePath;
          }
        } else {
          // Update top-level field
          newData[fieldName] = filePath;
        }

        return newData;
      });
    } catch (error) {
      console.error("Upload error:", error);
      alert("File upload failed");
    } finally {
      setUploading(false);
    }
  };

  // Handle text input changes
  const handleTextChange = (value, field, index = null, subIndex = null, subField = null) => {
    setEditedData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));

      if (index !== null) {
        if (newData.pageContent.tabs.length > 0) {
          // Editing tab content
          if (subIndex !== null && subField !== null) {
            // imagesList item editing (nested object)
            newData.pageContent.tabs[activeTab].content[index].imagesListItems[subIndex][subField] = value;
          } else if (subIndex !== null) {
            // List item editing
            newData.pageContent.tabs[activeTab].content[index].items[subIndex] = value;
          } else {
            newData.pageContent.tabs[activeTab].content[index][field] = value;
          }
        } else {
          // Editing direct content
          if (subIndex !== null && subField !== null) {
            // imagesList item editing (nested object)
            newData.pageContent.content[index].imagesListItems[subIndex][subField] = value;
          } else if (subIndex !== null) {
            newData.pageContent.content[index].items[subIndex] = value;
          } else {
            newData.pageContent.content[index][field] = value;
          }
        }
      } else {
        // Editing top-level fields
        newData[field] = value;
      }

      return newData;
    });
  };

  // Add new content block - CHANGED FROM push() TO unshift()
  const addContentBlock = (type) => {
    const newBlock = { type };

    switch (type) {
      case 'image':
        newBlock.src = '';
        newBlock.alt = '';
        break;
      case 'heading':
      case 'subHeading':
      case 'paragraph':
        newBlock.para = '';
        break;
      case 'list':
        newBlock.para = '';
        newBlock.items = [''];
        break;
      case 'imagesList':
        newBlock.para = '';
        newBlock.imagesListItems = [{ src: '', alt: '' }];
        break;
      default:
        break;
    }

    setEditedData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));

      if (newData.pageContent.tabs.length > 0) {
        // CHANGED: Use unshift() to add at beginning instead of push() for end
        newData.pageContent.tabs[activeTab].content.unshift(newBlock);
      } else {
        // CHANGED: Use unshift() to add at beginning instead of push() for end
        newData.pageContent.content.unshift(newBlock);
      }

      return newData;
    });
  };

  // Remove content block
  const removeContentBlock = (index) => {
    const confirmed = window.confirm("do you want to remove ContentBlock ?");
    if (!confirmed) {
      return;
    } 
    setEditedData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));

      if (newData.pageContent.tabs.length > 0) {
        newData.pageContent.tabs[activeTab].content.splice(index, 1);
      } else {
        newData.pageContent.content.splice(index, 1);
      }

      return newData;
    });
  };

  // Add list item
  const addListItem = (blockIndex) => {
    setEditedData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));

      if (newData.pageContent.tabs.length > 0) {
        newData.pageContent.tabs[activeTab].content[blockIndex].items.push('');
      } else {
        newData.pageContent.content[blockIndex].items.push('');
      }

      return newData;
    });
  };

  // Remove list item
  const removeListItem = (blockIndex, itemIndex) => {
    const confirmed = window.confirm("do you want to remove List Item ?");
    if (!confirmed) {
      return;
    } 
    setEditedData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));

      if (newData.pageContent.tabs.length > 0) {
        newData.pageContent.tabs[activeTab].content[blockIndex].items.splice(itemIndex, 1);
      } else {
        newData.pageContent.content[blockIndex].items.splice(itemIndex, 1);
      }

      return newData;
    });
  };

  // Add imagesList item
  const addImagesListItem = (blockIndex) => {
    setEditedData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));

      if (newData.pageContent.tabs.length > 0) {
        newData.pageContent.tabs[activeTab].content[blockIndex].imagesListItems.push({ src: '', alt: '' });
      } else {
        newData.pageContent.content[blockIndex].imagesListItems.push({ src: '', alt: '' });
      }

      return newData;
    });
  };

  // Remove imagesList item
  const removeImagesListItem = (blockIndex, itemIndex) => {
    const confirmed = window.confirm("do you want to remove Image List Item ?");
    if (!confirmed) {
      return;
    } 
    setEditedData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));

      if (newData.pageContent.tabs.length > 0) {
        newData.pageContent.tabs[activeTab].content[blockIndex].imagesListItems.splice(itemIndex, 1);
      } else {
        newData.pageContent.content[blockIndex].imagesListItems.splice(itemIndex, 1);
      }

      return newData;
    });
  };

  // Add/remove tabs
  const addTab = () => {
    setEditedData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));

      if (!newData.pageContent.tabs || newData.pageContent.tabs.length === 0) {
        // Convert from content to tabs structure
        // Move existing content to first tab
        newData.pageContent.tabs = [
          {
            title: "Tab 1",
            content: newData.pageContent.content || []
          }
        ];
        // Keep content as empty array (not null)
        newData.pageContent.content = [];
      } else {
        // Add new empty tab
        newData.pageContent.tabs.push({
          title: `Tab ${newData.pageContent.tabs.length + 1}`,
          content: []
        });
      }
      return newData;
    });
  };

  const removeTab = (index) => {
    const confirmed = window.confirm("do you want to remove This tab ?");
    if (!confirmed) {
      return;
    } 
    if (editedData.pageContent.tabs.length <= 1) {
      // Convert from tabs back to content structure
      // When removing the last tab, move its content to content array
      setEditedData(prev => {
        const newData = JSON.parse(JSON.stringify(prev));

        // Move content from the tab being removed to content array
        newData.pageContent.content = newData.pageContent.tabs[index].content;
        // Keep tabs as empty array (not null)
        newData.pageContent.tabs = [];

        setActiveTab(0);
        return newData;
      });
      return;
    }

    // Regular tab removal (when multiple tabs exist)
    setEditedData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      newData.pageContent.tabs.splice(index, 1);
      if (activeTab >= index) {
        setActiveTab(Math.max(0, activeTab - 1));
      }
      return newData;
    });
  };


  // Get current content array based on structure
  const getCurrentContent = () => {
    if (editedData.pageContent.tabs && editedData.pageContent.tabs.length > 0) {
      return editedData.pageContent.tabs[activeTab].content;
    }
    return editedData.pageContent.content || [];
  };

  // Render edit fields based on content type
  const renderEditFields = (item, index) => {
    switch (item.type) {
      case 'image':
        return (
          <div className="border p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold">Image</h4>
              <div className="w-[20%] flex items-center">
                <span className="text-gray-600 font-semibold">change order : </span>
                <input
                  type="number"
                  value={item.order ? item.order : 0}
                  onChange={(e) => handleTextChange(e.target.value, 'order', index)}
                  className="w-[30%] ml-1 px-2 py-0.5 border rounded font-bold"
                  placeholder="s.no"
                />
              </div>
              <button
                onClick={() => removeContentBlock(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>

            {item.src && (
              <div className="mb-3">
                <img src={item.src.startsWith("uploads/") ? `${baseURl}/${item.src}` : item.src} alt="Preview" className="max-w-xs max-h-32 object-contain" />
              </div>
            )}

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Upload Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      handleFileUpload(e.target.files[0], 'src', index);
                    }
                  }}
                  disabled={uploading}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Alt Text:</label>
                <input
                  type="text"
                  value={item.alt || ''}
                  onChange={(e) => handleTextChange(e.target.value, 'alt', index)}
                  className="w-full p-2 border rounded"
                  placeholder="Image description"
                />
              </div>
            </div>
          </div>
        );

      case 'heading':
      case 'subHeading':
      case 'paragraph':
        return (
          <div className="border p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold capitalize">{item.type}</h4>
              <div className="w-[20%] flex items-center">
                <span className="text-gray-600 font-semibold">change order : </span>
                <input
                  type="number"
                  value={item.order ? item.order : 0}
                  onChange={(e) => handleTextChange(e.target.value, 'order', index)}
                  className="w-[30%] ml-1 px-2 py-0.5 border rounded font-bold"
                  placeholder="s.no"
                />
              </div>
              <button
                onClick={() => removeContentBlock(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>

            <textarea
              value={item.para || ''}
              onChange={(e) => handleTextChange(e.target.value, 'para', index)}
              className="w-full p-2 border rounded h-24"
              placeholder={`Enter ${item.type} text...`}
            />
          </div>
        );

      case 'list':
        return (
          <div className="border p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold">List</h4>
              <div className="w-[20%] flex items-center">
                <span className="text-gray-600 font-semibold">change order : </span>
                <input
                  type="number"
                  value={item.order ? item.order : 0}
                  onChange={(e) => handleTextChange(e.target.value, 'order', index)}
                  className="w-[30%] ml-1 px-2 py-0.5 border rounded font-bold"
                  placeholder="s.no"
                />
              </div>
              <button
                onClick={() => removeContentBlock(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">List Title:</label>
                <input
                  type="text"
                  value={item.para || ''}
                  onChange={(e) => handleTextChange(e.target.value, 'para', index)}
                  className="w-full p-2 border rounded"
                  placeholder="List title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">List Items:</label>
                {item.items.map((listItem, itemIndex) => (
                  <div key={itemIndex} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={listItem}
                      onChange={(e) => handleTextChange(e.target.value, 'items', index, itemIndex)}
                      className="flex-1 p-2 border rounded"
                      placeholder={`Item ${itemIndex + 1}`}
                    />
                    <button
                      onClick={() => removeListItem(index, itemIndex)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      disabled={item.items.length <= 1}
                    >
                      ×
                    </button>
                  </div>
                ))}

                <button
                  onClick={() => addListItem(index)}
                  className="bg-green-500 text-white px-3 py-1 rounded mt-2"
                >
                  Add Item
                </button>
              </div>
            </div>
          </div>
        );

      case 'imagesList':
        return (
          <div className="border p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold">Images List</h4>
              <div className="w-[20%] flex items-center">
                <span className="text-gray-600 font-semibold">change order : </span>
                <input
                  type="number"
                  value={item.order ? item.order : 0}
                  onChange={(e) => handleTextChange(e.target.value, 'order', index)}
                  className="w-[30%] ml-1 px-2 py-0.5 border rounded font-bold"
                  placeholder="s.no"
                />
              </div>
              <button
                onClick={() => removeContentBlock(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">List Title:</label>
                <input
                  type="text"
                  value={item.para || ''}
                  onChange={(e) => handleTextChange(e.target.value, 'para', index)}
                  className="w-full p-2 border rounded"
                  placeholder="List title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Image Items:</label>
                {item.imagesListItems && item.imagesListItems.map((listItem, itemIndex) => (
                  <div key={itemIndex} className="flex gap-2 mb-4 p-3 border rounded bg-gray-50 hover:bg-blue-50">
                    <div className="flex-1 flex gap-4 items-start">
                      {listItem.src && (
                        <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-24 w-32">
                          <img
                            src={listItem.src.startsWith("uploads/") ? `${baseURl}/${listItem.src}` : listItem.src}
                            alt="Preview"
                            className="w-32 h-24 object-cover"
                          />
                        </div>
                      )}
                      <div className="space-y-3 flex-1">
                        <div>
                          <label className="block text-sm font-medium mb-1 cursor-pointer hover:text-gray-600">
                            Upload Image:
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              if (e.target.files[0]) {
                                handleFileUpload(e.target.files[0], 'src', index, itemIndex);
                              }
                            }}
                            disabled={uploading}
                            className="w-full cursor-pointer"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1">Alt Text:</label>
                          <input
                            type="text"
                            value={listItem.alt || ''}
                            onChange={(e) => handleTextChange(e.target.value, 'alt', index, itemIndex, 'alt')}
                            className="w-full p-2 border rounded"
                            placeholder="Image description"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeImagesListItem(index, itemIndex)}
                      className="bg-red-500 text-white px-3 py-1 rounded h-fit"
                      disabled={item.imagesListItems.length <= 1}
                    >
                      ×
                    </button>
                  </div>
                ))}

                <button
                  onClick={() => addImagesListItem(index)}
                  className="bg-green-500 text-white px-3 py-1 rounded mt-2"
                >
                  Add Image Item
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold">Edit Content: {editedData.title}</h2>
          <div className="flex gap-2">
            <button
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(editedData)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Main Title Edit */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Page Title:</label>
          <input
            type="text"
            value={editedData.title}
            onChange={(e) => handleTextChange(e.target.value, 'title')}
            className="w-full p-3 border rounded text-xl font-bold"
          />
        </div>

        {/* Tabs Management */}
        {editedData.pageContent.tabs && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Tabs</h3>
              <button
                onClick={addTab}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Add Tab
              </button>
            </div>

            <div className="flex border-b mb-4 overflow-x-auto">
              {editedData.pageContent.tabs.map((tab, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`px-4 py-2 font-medium whitespace-nowrap cursor-pointer ${activeTab === index
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600 hover:text-gray-800"
                      }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.title}
                  </div>
                  <div className="ml-2 flex items-center">
                    <input
                      type="text"
                      value={tab.title}
                      onChange={(e) => {
                        setEditedData(prev => {
                          const newData = JSON.parse(JSON.stringify(prev));
                          newData.pageContent.tabs[index].title = e.target.value;
                          return newData;
                        });
                      }}
                      className="w-36 px-2 py-1 border rounded text-sm"
                      placeholder="Tab title"
                      onClick={(e) => e.stopPropagation()}
                    />
                    {editedData.pageContent.tabs.length > 0 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeTab(index);
                        }}
                        className="text-red-500 ml-2 px-2 py-1 hover:bg-red-50 rounded"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Blocks */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Content Blocks</h3>
            <div className="flex gap-2">
              <select
                onChange={(e) => addContentBlock(e.target.value)}
                className="border rounded p-2"
                defaultValue=""
              >
                <option value="" disabled>Add Block</option>
                <option value="heading">Heading</option>
                <option value="subHeading">Subheading</option>
                <option value="paragraph">Paragraph</option>
                <option value="image">Image</option>
                <option value="list">List</option>
                <option value="imagesList">Images List</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {getCurrentContent().map((item, index) => (
              <div key={index}>
                {renderEditFields(item, index)}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 border-t pt-4">
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-6 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(editedData)}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            {uploading ? "Uploading..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditContentRender;
