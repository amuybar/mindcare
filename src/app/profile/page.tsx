'use client'

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, FormEvent } from 'react';
import { useUser } from '@clerk/nextjs';

export default function ProfilePage() {
  const { user } = useUser();
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (user) {
      fetchUserDetails();
    }
  }, [user]);

  async function fetchUserDetails() {
    try {
      const response = await fetch(`/api/userProfile?userId=${user?.id}`);
      const data = await response.json();
      if (data) {
        setFullName(data.fullName || user?.fullName || '');
        setDob(data.dob || '');
        setEmail(data.email || user?.primaryEmailAddress?.emailAddress || '');
        setBio(data.bio || '');
        setPhone(data.phone || '');
        setGender(data.gender || '');
        setLocation(data.location || '');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user details:', error);
      setLoading(false);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/userProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user?.id,
          fullName,
          dob,
          email,
          bio,
          phone,
          gender,
          location,
        }),
      });
    
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API error:', errorData);
        throw new Error(errorData.message || 'Failed to update profile');
      }
    
      const data = await response.json();
      console.log('Profile updated successfully:', data);
      // Handle success...
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error...
    }
    setLoading(false);
  }

  if (!user || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold container mx-auto mt-10 p-6 bg-sky-300 rounded-lg shadow-md max-w-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-sky-200 min-h-screen item-center">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-sky-950">Profile</h1>
        <div className="mb-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-sky-950 font-bold text-3xl">
              {user.fullName?.charAt(0).toUpperCase()}
            </div>
          </div>
          <h2 className="text-xl text-sky-950 font-semibold">{fullName}</h2>
          <p className="text-gray-600">{email}</p>
          <button
            onClick={() => setEditing(!editing)}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {editing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
        
        {editing && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sky-950 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sky-950 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sky-950 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sky-950 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sky-950 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sky-950 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows={3}
                placeholder="Tell us a bit about yourself"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-sky-950 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Your current location"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? 'Updating...' : 'Update Profile'}
            </button>
          </form>
        )}

        {/* User activity section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center text-sky-950 mb-6">Your Activities</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-sky-950">Recent Interactions</h3>
            <ul className="list-disc list-inside">
              <li>Interaction 1</li>
              <li>Interaction 2</li>
              <li>Interaction 3</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-sky-950">Groups</h3>
            <p>You are in X groups</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-sky-950">Forums</h3>
            <p>Activeness in forums: X%</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-sky-950">Support Groups</h3>
            <p>Activeness in support groups: X%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
