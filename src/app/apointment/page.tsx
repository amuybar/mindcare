'use client'

import { useState, useEffect } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Link from 'next/link';

interface Therapist {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface FreeSession {
  id: string;
  title: string;
  description: string;
}

const AppointmentPage = () => {
  const [activeTab, setActiveTab] = useState('book');
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [freeSessions, setFreeSessions] = useState<FreeSession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API calls
    setTimeout(() => {
      setTherapists([
        { id: '1', name: 'Dr. Smith', description: 'Specializes in anxiety and depression', price: 100 },
        { id: '2', name: 'Dr. Johnson', description: 'Expert in cognitive behavioral therapy', price: 120 },
      ]);
      setFreeSessions([
        { id: '1', title: 'Stress Management Workshop', description: 'Learn techniques to manage daily stress' },
        { id: '2', title: 'Mindfulness Meditation Session', description: 'Introduction to mindfulness practices' },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-sky-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-4">
          <Link href="/" className="text-sky-950 mr-4">
            <FaArrowCircleLeft size={24} />
          </Link>
          <h1 className="text-sky-950 text-xl font-semibold">Mental Health &gt; Appointment</h1>
        </div>

        <div className="mb-6">
          <div className="flex border-b border-sky-300">
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'book' ? 'text-sky-950 border-b-2 border-sky-950' : 'text-sky-600'
                }`}
              onClick={() => setActiveTab('book')}
            >
              Book Appointment
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'free' ? 'text-sky-950 border-b-2 border-sky-950' : 'text-sky-600'
                }`}
              onClick={() => setActiveTab('free')}
            >
              Free Consultation
            </button>
          </div>
        </div>

        {loading ? (
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-white bg-opacity-50 backdrop-blur-md rounded-lg p-4 shadow-md animate-pulse">
                <div className="h-6 bg-sky-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-sky-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-sky-200 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        ) : activeTab === 'book' ? (
          <div className="grid gap-4 md:grid-cols-2">
            {therapists.map((therapist) => (
              <div key={therapist.id} className="bg-white bg-opacity-50 backdrop-blur-md rounded-lg p-4 shadow-md">
                <h3 className="text-sky-950 font-semibold mb-2">{therapist.name}</h3>
                <p className="text-sky-800 mb-4">{therapist.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sky-950 font-medium">${therapist.price}</span>
                 <Link
                  href={`/book/${therapist.id}`}
                  className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors"
>
                  Book Appointment
                </Link>
              </div>
              </div>
        ))}
      </div>
      ) : (
      <div className="grid gap-4 md:grid-cols-2">
        {freeSessions.map((session) => (
          <div key={session.id} className="bg-white bg-opacity-50 backdrop-blur-md rounded-lg p-4 shadow-md">
            <h3 className="text-sky-950 font-semibold mb-2">{session.title}</h3>
            <p className="text-sky-800 mb-4">{session.description}</p>
            <Link href='/engage' className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors">
              Engage
            </Link>
          </div>
        ))}
      </div>
        )}
    </div>
    </div >
  );
};

export default AppointmentPage;