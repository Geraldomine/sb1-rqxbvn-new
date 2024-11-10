import axios from './axios';
import type { Event } from '../types';

export interface CreateEventDTO {
  location: string;
  eventDate: string;
  details: string;
  maxParticipants: number;
  sportId: number;
}

export const getAllEvents = async (): Promise<Event[]> => {
  try {
    const response = await axios.get<Event[]>('/api/events');
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch events: ${error.message}`);
    }
    throw new Error('Failed to fetch events');
  }
};

export const getEventById = async (id: string): Promise<Event> => {
  try {
    const response = await axios.get<Event>(`/api/events/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch event: ${error.message}`);
    }
    throw new Error('Failed to fetch event');
  }
};

export const createEvent = async (event: CreateEventDTO): Promise<Event> => {
  try {
    const response = await axios.post<Event>('/api/events', event);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to create event: ${error.message}`);
    }
    throw new Error('Failed to create event');
  }
};

export const joinEvent = async (eventId: string): Promise<Event> => {
  try {
    const response = await axios.post<Event>(`/api/events/${eventId}/participants`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to join event: ${error.message}`);
    }
    throw new Error('Failed to join event');
  }
};

export const leaveEvent = async (eventId: string): Promise<Event> => {
  try {
    const response = await axios.delete<Event>(`/api/events/${eventId}/participants`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to leave event: ${error.message}`);
    }
    throw new Error('Failed to leave event');
  }
};

export const getMyEvents = async (): Promise<Event[]> => {
  try {
    const response = await axios.get<Event[]>('/api/events/my-events');
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch my events: ${error.message}`);
    }
    throw new Error('Failed to fetch my events');
  }
};

export const getMyParticipations = async (): Promise<Event[]> => {
  try {
    const response = await axios.get<Event[]>('/api/events/my-participations');
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch my participations: ${error.message}`);
    }
    throw new Error('Failed to fetch my participations');
  }
};