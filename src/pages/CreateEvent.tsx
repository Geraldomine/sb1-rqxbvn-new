import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, AlertCircle } from 'lucide-react';
import Input from '../components/Input';
import { createEvent } from '../api/events';
import { getAllSports } from '../api/sports';
import type { Sport } from '../types';

function CreateEvent() {
  const navigate = useNavigate();
  const [sports, setSports] = useState<Sport[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    location: '',
    eventDate: '',
    details: '',
    maxParticipants: '',
    sportId: ''
  });

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const sportsList = await getAllSports();
        setSports(sportsList);
      } catch (err) {
        setError('Failed to load sports list');
      }
    };
    fetchSports();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await createEvent({
        location: formData.location,
        eventDate: formData.eventDate,
        details: formData.details,
        maxParticipants: parseInt(formData.maxParticipants),
        sportId: parseInt(formData.sportId)
      });
      navigate('/events');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create event');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Event</h1>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <div className="flex items-center text-red-600">
              <AlertCircle className="h-5 w-5 mr-2" />
              <span>{error}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sport
            </label>
            <select
              required
              value={formData.sportId}
              onChange={(e) => setFormData({ ...formData, sportId: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              disabled={isLoading}
            >
              <option value="">Select a sport</option>
              {sports.map((sport) => (
                <option key={sport.id} value={sport.id}>
                  {sport.name}
                </option>
              ))}
            </select>
          </div>

          <Input
            label="Location"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            disabled={isLoading}
          />

          <Input
            label="Event Date"
            type="datetime-local"
            required
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            disabled={isLoading}
          />

          <Input
            label="Maximum Participants"
            type="number"
            required
            min="2"
            value={formData.maxParticipants}
            onChange={(e) => setFormData({ ...formData, maxParticipants: e.target.value })}
            disabled={isLoading}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Details
            </label>
            <textarea
              required
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating Event...' : 'Create Event'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;