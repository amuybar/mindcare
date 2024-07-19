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

const BookAppointmentPage = ({ params }: { params: { id: string } }) => {
 
  const [therapist, setTherapist] = useState<Therapist | null>(null);
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { id } = params;

    if (!id) return;

    // Simulating API call to fetch therapist details
    setTimeout(() => {
      // For demo purposes, using hardcoded values
      const fetchedTherapist = {
        id: '1',
        name: 'Dr. Smith',
        description: 'Specializes in anxiety and depression',
        price: 100,
      };
      if (fetchedTherapist.id === id) {
        setTherapist(fetchedTherapist);
        setLoading(false);
      }
    }, 1500);
  }, [params]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (therapist && date && time) {
      // Handle form submission, e.g., send data to API
      alert(`Appointment booked with ${therapist.name} on ${date} at ${time}`); } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-sky-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-4">
          <Link href="/" className="text-sky-950 mr-4">
            <FaArrowCircleLeft size={24} />
          </Link>
          <h1 className="text-sky-950 text-xl font-semibold">Book Appointment</h1>
        </div>

        {loading ? (
          <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-lg p-4 shadow-md animate-pulse">
            <div className="h-6 bg-sky-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-sky-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-sky-200 rounded w-5/6"></div>
          </div>
        ) : (
          therapist && (
            <form onSubmit={handleSubmit} className="bg-white bg-opacity-50 backdrop-blur-md rounded-lg p-6 shadow-md">
              <h2 className="text-sky-950 text-lg font-semibold mb-4">{`Schedule with ${therapist.name}`}</h2>
              <p className="text-sky-800 mb-4">{therapist.description}</p>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sky-800 mb-2">Date</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 border border-sky-300 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="time" className="block text-sky-800 mb-2">Time</label>
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 border border-sky-300 rounded"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors"
              >
                Confirm Appointment
              </button>
            </form>
          )
        )}
      </div>
    </div>
  );
};

export default BookAppointmentPage;
