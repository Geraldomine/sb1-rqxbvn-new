import React from 'react';
import { format } from 'date-fns';
import { Star, MessageSquare } from 'lucide-react';
import { Event, Review } from '../types';

function PastEvents() {
  // Mock data - replace with actual API call
  const pastEvents: (Event & { review?: Review })[] = [
    {
      id: '1',
      title: 'Basketball Tournament',
      description: 'Great tournament with amazing players',
      sport: 'Basketball',
      date: '2024-02-15T14:00:00Z',
      location: 'Central Park Courts',
      maxParticipants: 20,
      currentParticipants: 20,
      organizer: {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com'
      },
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80',
      review: {
        id: '1',
        eventId: '1',
        userId: '2',
        rating: 5,
        comment: 'Amazing event! Great organization and friendly participants.',
        date: '2024-02-16T10:00:00Z'
      }
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Past Events</h1>

      <div className="space-y-6">
        {pastEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <div className="text-gray-600 mb-4">
                  <p>{format(new Date(event.date), 'PPP')}</p>
                  <p>{event.location}</p>
                </div>

                {event.review ? (
                  <div className="border-t pt-4">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < event.review!.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">
                        {format(new Date(event.review.date), 'PP')}
                      </span>
                    </div>
                    <p className="text-gray-600">{event.review.comment}</p>
                  </div>
                ) : (
                  <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-500">
                    <MessageSquare className="h-5 w-5" />
                    <span>Write a Review</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastEvents;