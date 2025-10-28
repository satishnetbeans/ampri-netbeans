// @ts-nocheck
import React, { useState, useEffect } from "react";
import { FileEdit, Trash2, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../../../components/Admin Dashboard/Card";

import { fetchUsers, CreateUser, UpdateUser, DeleteUser } from "../../../api/axios";

const Users = ({UserData , updateUserData , SiteData}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const roleOptions = [
        { role: "Super Admin", info: "All access" },
        { role: "Admin", info: "All access but can't create new users" },
        { role: "Editor", info: "Can edit all but no dashboard access" },
        { role: "Member", info: "Limited edit access" },
    ];

    const accessMap = {
        "Super Admin": "Full",
        Admin: "Full",
        Editor: "Partial",
        Member: "Restricted",
    };

    // ✅ Hardcoded route options for Restricted/Member users
    const restrictedRouteOptions = [
        {
            title: "topBar", routes: ["Events",
                "career",
                "Office Memorandum",]
        },
        {
            title: "Main Navigations", routes: ["HomePage", "About Pages", "Research Pages", "R&D Management", "Tender", "Directory", "Gallery", "Services", "CSR"]
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        title: "",
        role: "Member",
        access: "Restricted",
        password: "",
        oldPassword: "",
        newPassword: "",
        accessModules: [],
    });

    console.log("edited user  ::", editUser)
    console.log("formData user  ::", formData)

    // Load users on component mount
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            setLoading(true);
            const res = await fetchUsers();
            if (res.data && res.data.length > 0) {
                console.log("users data:", res.data)
                setUsers(res.data)
            } else {
                setUsers([]);
            }
        } catch (err) {
            console.error("Error fetching users:", err);
            alert("Error loading users");
        } finally {
            setLoading(false);
        }
    }

    const handleOpenModal = (user = null) => {
        setEditUser(user);
        setFormData(
            user
                ? {
                    ...user,
                    username: user.username || "",
                    password: "",
                    oldPassword: "",
                    newPassword: "",
                    accessModules: user.accessModules || []
                }
                : {
                    username: "",
                    email: "",
                    title: "",
                    role: "Member",
                    access: "Restricted",
                    password: "",
                    accessModules: [],
                }
        );
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditUser(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "role") {
            const access = accessMap[value] || formData.access;
            setFormData((prev) => ({ ...prev, role: value, access }));
        } else if (name === "access") {
            const role =
                Object.keys(accessMap).find((key) => accessMap[key] === value) ||
                formData.role;
            setFormData((prev) => ({ ...prev, access: value, role }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    // ✅ Handle restricted routes checkbox
    const handleAccessModuleToggle = (title, module) => {
        setFormData((prev) => {
            let updatedModules = prev.accessModules.map((m) => ({
                title: m.title,
                routes: [...m.routes],
            }));

            const existingIndex = updatedModules.findIndex((m) => m.title === title);

            if (existingIndex !== -1) {
                const existingGroup = updatedModules[existingIndex];
                const routeExists = existingGroup.routes.includes(module);

                let newRoutes;
                if (routeExists) {
                    newRoutes = existingGroup.routes.filter((r) => r !== module);
                } else {
                    newRoutes = [...existingGroup.routes, module];
                }

                if (newRoutes.length > 0) {
                    updatedModules[existingIndex] = { title, routes: newRoutes };
                } else {
                    updatedModules = updatedModules.filter((_, i) => i !== existingIndex);
                }
            } else {
                updatedModules = [...updatedModules, { title, routes: [module] }];
            }

            console.log("✅ Final updatedModules: ", updatedModules);

            return { ...prev, accessModules: updatedModules };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (editUser) {
                // Update user
                const updateData = {
                    username: formData.username,
                    email: formData.email,
                    title: formData.title,
                    role: formData.role,
                    access: formData.access,
                    accessModules: formData.accessModules,
                };

                // Only include password fields if provided
                if (formData.password) {
                    updateData.newPassword = formData.password;
                }
                if (formData.oldPassword) {
                    updateData.oldPassword = formData.oldPassword;
                }

                const response = await UpdateUser(editUser._id, updateData);

                console.log("User updated:", response);
                if (response.data) {
                    setUsers((prev) =>
                        prev.map((u) => (u._id === editUser._id ? { ...u, ...updateData } : u))
                    );
                    alert("User updated")
                } else {
                    alert(response.error.message)
                }

                // Update local state
            } else {
                // Create new user
                const newUserData = {
                    username: formData.username,
                    email: formData.email,
                    title: formData.title,
                    role: formData.role,
                    access: formData.access,
                    password: formData.password,
                    accessModules: formData.accessModules,
                };

                const response = await CreateUser(newUserData);
                console.log("New user created:", response);

                if (response.data) {
                    // Add to local state
                    setUsers((prev) => [...prev, response.data]);
                    alert("New User created")
                } else {
                    alert(response.error.message)
                }


            }

            handleCloseModal();
        } catch (error) {
            console.error("Error saving user:", error);
            alert("Error saving user. Please try again.");
        }
    };

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this user?")) {
            try {
                const response = await DeleteUser(id);
                console.log(response)
                if (response.data) {
                    // Update local state
                    alert("User Deletd successfully")
                    setUsers((prev) => prev.filter((u) => u._id !== id));
                } else {
                    alert(response.error.message)
                }
                console.log("User deleted:", id);


            } catch (error) {
                console.error("Error deleting user:", error);
                alert("Error deleting user. Please try again.");
            }
        }
    };

    const superAdminExists = users.some((u) => u.role === "Super Admin");

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Manage Users
                </h2>
                <button
                    onClick={() => handleOpenModal()}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                    <UserPlus /> Add User
                </button>
            </div>

            {/* User Table */}
            <Card className="p-0 overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead className="bg-gray-50">
                        <tr>
                            {["Name", "Email", "Title", "Role", "Access", "Actions"].map(
                                (head, i) => (
                                    <th
                                        key={i}
                                        className={`px-6 py-3 text-sm font-medium text-gray-600 border-b ${head === "Actions" ? "text-center" : "text-left"
                                            }`}
                                    >
                                        {head}
                                    </th>
                                )
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="6" className="text-center text-gray-500 py-6">
                                    Loading users...
                                </td>
                            </tr>
                        ) : users.length > 0 ? (
                            users.map((user) => (
                                <tr
                                    key={user._id}
                                    className="hover:bg-gray-50 border-b transition"
                                >
                                    <td className="px-6 py-3 text-gray-800">
                                        {user.username}
                                    </td>
                                    <td className="px-6 py-3 text-gray-700">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-3 text-gray-700">
                                        {user.title}
                                    </td>
                                    <td className="px-6 py-3 text-gray-700">
                                        {user.role}
                                    </td>
                                    <td className="px-6 py-3 text-gray-700">
                                        {user.access}
                                    </td>
                                    <td className="px-6 py-3 flex justify-center gap-3">
                                        <button
                                            onClick={() => handleOpenModal(user)}
                                            className="p-2 rounded-lg hover:bg-blue-50 text-blue-600"
                                        >
                                            <FileEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="p-2 rounded-lg hover:bg-red-50 text-red-600"
                                        >
                                            <Trash2 />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="text-center text-gray-500 py-6"
                                >
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Card>

            {/* Add/Edit Modal */}
            {isModalOpen && (
                <div className="fixed h-[100vh] w-[100vw] top-0 left-0   bg-black bg-opacity-40 flex justify-center items-center z-50 ">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white  shadow-lg w-[50vw] h-[100vh] overflow-y-auto p-6 px-12  ultra-thin-scrollbar "
                    >
                        <h3 className="text-xl text-center font-semibold mb-4 text-gray-800">
                            {editUser ? "Edit User" : "Add New User"}
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {["username", "email", "title"].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-600 capitalize">
                                        {field === "username" ? "Name" : field}
                                    </label>
                                    <input
                                        type="text"
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        required
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>
                            ))}

                            {/* Role Dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Role
                                </label>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    disabled={editUser?.role === "Super Admin"}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-100 disabled:text-gray-500"
                                >
                                    {roleOptions.map((role) => {
                                        if (editUser?.role === "Super Admin") {
                                            console.log("including role");
                                        } else if (role.role === "Super Admin") {
                                            return null
                                        }
                                        return (
                                            <option key={role.role} value={role.role}>
                                                {role.role} — {role.info}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            {/* Access Dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Access
                                </label>
                                <select
                                    name="access"
                                    value={formData.access}
                                    onChange={handleChange}
                                    disabled={editUser?.role === "Super Admin"}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-100 disabled:text-gray-500"
                                >
                                    {Object.values(accessMap)
                                        .filter(
                                            (val, idx, arr) =>
                                                arr.indexOf(val) === idx
                                        )
                                        .map((access) => (
                                            <option key={access} value={access}>
                                                {access}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            {/* ✅ Restricted Route Checklist */}
                            {(formData.role === "Member" ||
                                formData.access === "Restricted") && (
                                    <div className="border rounded-lg p-3 bg-gray-50">
                                        <label className="block text-sm font-medium text-gray-600 mb-2">
                                            Allowed Routes to Edit (for Restricted User)
                                        </label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {restrictedRouteOptions.map((route, i) => (
                                                <div key={route.title}>
                                                    <h2>{route.title}</h2>
                                                    {formData.accessModules.includes({ title: route.title, routes: [] })}
                                                    {route.routes.map((routeAvailable, i) => (
                                                        <label
                                                            key={i}
                                                            className="flex items-center gap-2 text-sm text-gray-700"
                                                        >

                                                            <input
                                                                type="checkbox"
                                                                checked={formData.accessModules.some(
                                                                    (m) => m.title === route.title && m.routes.includes(routeAvailable)
                                                                )}

                                                                onChange={() => handleAccessModuleToggle(route.title, routeAvailable)}
                                                                className="accent-blue-600"
                                                            />
                                                            {routeAvailable}
                                                        </label>
                                                    ))}

                                                </div>

                                            ))}
                                        </div>
                                    </div>
                                )}

                            {/* Password Section */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    {editUser ? "Update Password" : "Password"}
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder={
                                        editUser
                                            ? "Enter new password (optional)"
                                            : "Enter password"
                                    }
                                    value={formData.password || ""}
                                    onChange={handleChange}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    required={!editUser}
                                />
                                <p className="text-xs text-gray-500 mt-1 italic">
                                    Keep your password safe for future usage.
                                </p>
                            </div>

                            {/* Old Password for edits */}
                            {editUser && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">
                                        Old Password
                                    </label>
                                    <input
                                        type="password"
                                        name="oldPassword"
                                        placeholder="Enter old password to update password (optional)"
                                        value={formData.oldPassword || ""}
                                        onChange={handleChange}
                                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>
                            )}

                            <div className="flex justify-end gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    {editUser ? "Save Changes" : "Add User"}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Users;

