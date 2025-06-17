import fetchPath from '../../../util/fetchPath';

// src/components/home/upcoming-events/logic.ts
export interface TimelineEventData {
  title: string;
  start: string; // ISO date string
  end?: string; // ISO date string, optional
  description: string;
  image?: string;
  flyer?: string;
}

export interface TimelineEventData {
  title: string;
  start: string; // ISO date string
  end?: string; // ISO date string, optional
  description: string;
  image?: string;
  flyer?: string;
}

export const fetchTimelineEvents = async (): Promise<TimelineEventData[]> => {
  try {
    const response = await fetch(fetchPath('/config/events/events.json'));
    if (!response.ok) {
      throw new Error(`Failed to fetch timeline events: ${response.statusText}`);
    }
    const data: TimelineEventData[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching timeline events:", error);
    // Depending on how you want to handle errors, you might re-throw,
    // return an empty array, or return a specific error object.
    throw error; // Re-throwing for the caller to handle
  }
};