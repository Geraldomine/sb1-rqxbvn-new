import axios from 'axios';
import { Sport, Event } from '../types';

const API_URL = '/api/sports';

export interface SportDTO {
  name: string;
}

export const getAllSports = async (): Promise<Sport[]> => {
  const response = await axios.get<Sport[]>(API_URL);
  return response.data;
};

export const getSportById = async (id: number): Promise<Sport> => {
  const response = await axios.get<Sport>(`${API_URL}/${id}`);
  return response.data;
};

export const createSport = async (sport: SportDTO): Promise<Sport> => {
  const response = await axios.post<Sport>(API_URL, sport);
  return response.data;
};

export const updateSport = async (id: number, sport: SportDTO): Promise<Sport> => {
  const response = await axios.put<Sport>(`${API_URL}/${id}`, sport);
  return response.data;
};

export const deleteSport = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const getEventsBySport = async (id: number): Promise<Event[]> => {
  const response = await axios.get<Event[]>(`${API_URL}/${id}/events`);
  return response.data;
};