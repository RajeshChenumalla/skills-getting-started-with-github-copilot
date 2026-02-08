export interface Activity {
  description: string;
  schedule: string;
  maxParticipants: number;
  participants: string[];
}

export interface ActivitiesResponse {
  [key: string]: Activity;
}
