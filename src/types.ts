export interface User {
  id: string;
  email: string;
}

export interface Sport {
  id: number;
  name: string;
}

export interface Event {
  id: number;
  location: string;
  eventDate: string;
  details: string;
  sport: Sport;
  createdBy: User;
  participants: User[];
  maxParticipants: number;
}

export interface ApiError {
  statusCode: number;
  timestamp: string;
  error: string;
  message: string;
}