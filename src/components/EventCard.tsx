import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import type { Event } from '../types';

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  return (
    <Link to={`/events/${event.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{event.details}</h3>
          <div className="space-y-2 text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(event.eventDate), 'PPP')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>{event.participants.length}/{event.maxParticipants} participants</span>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Organized by: {event.createdBy.email}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;