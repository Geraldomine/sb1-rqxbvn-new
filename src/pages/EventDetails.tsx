import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, User } from 'lucide-react';
import { format } from 'date-fns';
import { Event } from '../types';

function EventDetails() {
  const { id } = useParams();

  // Mock data - replace with actual API call
  const event: Event = {
    id: '1',
    title: 'Weekend Basketball Tournament',
    description: 'Join us for a friendly basketball tournament. All skill levels are welcome! We\'ll form teams on the spot and play a round-robin tournament.',
    sport: 'Basketball',
    date: '2024-03-20T14:00:00Z',
    location: 'Central Park Courts',
    maxParticipants: 20,
    currentParticipants: 12,
    organizer: {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com'
    },
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80'
  };

  return (
    <div className="max-w-4xl mx-auto">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
      />

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="h-5 w-5" />
            <span>{format(new Date(event.date), 'PPP')}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="h-5 w-5" />
            <span>{format(new Date(event.date), 'p')}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="h-5 w-5" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Users className="h-5 w-5" />
            <span>{event.currentParticipants}/{event.maxParticipants} participants</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-600">{event.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Organizer</h2>
          <div className="flex items-center space-x-3">
            <div className="bg-gray-200 p-2 rounded-full">
              <User className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <p className="font-medium">{event.organizer.name}</p>
              <p className="text-sm text-gray-500">{event.organizer.email}</p>
            </div>
          </div>
        </div>

        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          Join Event
        </button>
      </div>
    </div>
  );
}

export default EventDetails;