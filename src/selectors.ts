import { IEvent } from "./App";

export const sortEventsByDate = (events: IEvent[]) => {
  return events
    .slice()
    .sort((event1, event2) => event1.date.getTime() - event2.date.getTime());
};

const differenceInMilliseconds = (date1: Date, date2: Date) => {
  return date1.getTime() - date2.getTime();
};

export const selectPastAndUpcomingEvents = (
  events: IEvent[],
  cutOffDate: Date
) => {
  const pastEvents = [];
  const upcomingEvents = [];

  events.forEach((event) => {
    const difference = differenceInMilliseconds(event.date, cutOffDate);

    const isEventToday = difference === 0;
    const isEventInTheFuture = difference > 0;

    if (isEventToday || isEventInTheFuture) {
      upcomingEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  });

  return {
    pastEvents: sortEventsByDate(pastEvents),
    upcomingEvents: sortEventsByDate(upcomingEvents),
  };
};
