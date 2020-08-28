import { IEvent } from "../types/Event";

export const sortEventsByDate = (events: IEvent[]) => {
  return events
    .slice()
    .sort((event1, event2) => event1.date.getTime() - event2.date.getTime());
};

const getDifferenceInMilliseconds = (date1: Date, date2: Date) => {
  return date1.getTime() - date2.getTime();
};

/**
 * Divides the events array in pastEvents (with date on or after cutOffDate,
 * sorted with the most recent first) and upcomingEvents (with date before cutOffDate, sorted
 * with the closest event first)
 *
 * The time complexity of this simple algorithm is O(n). It could be potentially
 * optimized to O(log n) by sorting the array first, finding the minimal positive
 * difference using binary search and then splitting the sorted array based on
 * the result
 *
 */
export const selectPastAndUpcomingEvents = (
  events: IEvent[],
  cutOffDate: Date
) => {
  const pastEvents = [];
  const upcomingEvents = [];

  events.forEach((event) => {
    // Bug fix: We don't want to take the time of the time into consideration
    // Todo: write a test case for this bug
    cutOffDate.setHours(0, 0, 0, 0);

    // How far in time is the event time from our cutOffDate (eg. today)
    const differenceInMilliseconds = getDifferenceInMilliseconds(
      event.date,
      cutOffDate
    );

    const isEventToday = differenceInMilliseconds === 0;
    const isEventInTheFuture = differenceInMilliseconds > 0;

    if (isEventToday || isEventInTheFuture) {
      upcomingEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  });

  return {
    pastEvents: sortEventsByDate(pastEvents).reverse(),
    upcomingEvents: sortEventsByDate(upcomingEvents),
  };
};
