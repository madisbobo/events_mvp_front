export interface Event {
  id: number;
  name: string;
  capacity: number;
  startDateTime: string;
  locationName: string;
  locationAddress: string;
  description: string;
  posterImage: string;
}

export interface EventPreview {
  id: number;
  name: string;
  startDateTime: string;
  locationName: string;
  posterImage: string | null;
  isActive: boolean;
}
