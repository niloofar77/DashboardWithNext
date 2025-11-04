
"use client";
import { useProfile } from "@/app/contexts/profile/profileContext";
import React from "react";

export default function ProfilePage() {
    const { setProfileUrl, setUsername, username } = useProfile();

    const handleProfileImageChange = () => {
        const imageInput = document.getElementById("imageInput") as HTMLInputElement;

        if (imageInput && imageInput.files) {
            const file = imageInput.files[0];
            if (file) {
                const fileUrl = URL.createObjectURL(file);
                setProfileUrl(fileUrl);
            }
        }
    };
    const handleUsernameChange = () => {
        const usernameInput = document.getElementById("usernameInput") as HTMLInputElement
        setUsername(usernameInput.value);
    }




return (
    <div className="max-w-3xl bg-white rounded-lg ">
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <div className="flex flex-row gap-4 mb-4">
                <input type="text" id="usernameInput" className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer"/>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={handleUsernameChange}>
                    Change Username
                </button>
            </div>
        </div>

        <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Profile Image</h3>
            <div className="flex">
                <div className="flex flex-row gap-4 items-center">
                    <input  type="file" id="imageInput" accept="image/*"className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer"/>
                    <button onClick={handleProfileImageChange}  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                        Change Profile Image
                    </button>
                </div>
            </div>
        </div>
    </div>
);
}
