'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const ProfilePanel = ({ isOpen, onClose }) => {
  // Profile data
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Shahnawaz Saddam Butt');
  const [email, setEmail] = useState('shahnawazsaddamb@gmail.com');
  const [phone, setPhone] = useState('+92 300 1234567');
  const [bio, setBio] = useState('Passionate about building modern, responsive web apps using Full Stack.');

  if (!isOpen) return null;

  // Handle Save
  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-gray-800 text-white shadow-lg z-50 p-6 overflow-y-auto transition-all duration-300 ease-in-out">
      <button
        onClick={onClose}
        className="mb-6 px-4 py-2 bg-red-600 hover:bg-red-700 block ml-auto text-white rounded-full text-sm font-semibold"
      >
        Close
      </button>

      <div className="flex flex-col items-center space-y-4">
        {/* Profile Picture */}
        <Image
          src="/butt.png"
          alt="Profile"
          width={300}
          height={300}
          className="w-28 h-28 rounded-full border-4 border-blue-700 shadow-lg"
        />

        {/* Profile Info */}
        {!isEditing ? (
          <>
            <h2 className="text-2xl font-bold">{name}</h2>
            <div className="w-full mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold">Email:</span>
                <span className="text-blue-200">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Phone:</span>
                <span className="text-blue-200">{phone}</span>
              </div>
              <div>
                <span className="font-semibold block mb-1">Bio:</span>
                <p className="text-blue-200">{bio}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-6 px-5 py-2 bg-blue-700 hover:bg-blue-600 rounded-full text-sm font-medium"
            >
              Edit Profile
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              placeholder="Your Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              placeholder="Email"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              placeholder="Phone"
            />
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              placeholder="Your bio"
              rows={3}
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-full text-sm font-medium"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-full text-sm font-medium"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePanel;
