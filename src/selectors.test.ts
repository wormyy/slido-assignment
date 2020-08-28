import { v4 as uuidv4 } from "uuid";

import { selectPastAndUpcomingEvents, sortEventsByDate } from "./selectors";
import { IEvent } from "./App";

describe("sortEventsByDate", () => {
  test("n = 3", () => {
    const eventsToSort: IEvent[] = [
      {
        id: uuidv4(),
        name: "Event in the future 2",
        description: "",
        date: new Date(2022, 0, 20),
        place: "",
        imageUrl: "",
      },
      {
        id: uuidv4(),
        name: "Event in the future",
        description: "",
        date: new Date(2021, 0, 20),
        place: "",
        imageUrl: "",
      },
      {
        id: uuidv4(),
        name: "Event in the past",
        description: "",
        date: new Date(2019, 0, 20),
        place: "",
        imageUrl: "",
      },
    ];

    const result = sortEventsByDate(eventsToSort);

    expect(result).toStrictEqual([
      {
        id: uuidv4(),
        name: "Event in the past",
        description: "",
        date: new Date(2019, 0, 20),
        place: "",
        imageUrl: "",
      },
      {
        id: uuidv4(),
        name: "Event in the future",
        description: "",
        date: new Date(2021, 0, 20),
        place: "",
        imageUrl: "",
      },
      {
        id: uuidv4(),
        name: "Event in the future 2",
        description: "",
        date: new Date(2022, 0, 20),
        place: "",
        imageUrl: "",
      },
    ]);
  });
});

describe("selectPastAndUpcomingEvents", () => {
  test("n = 2", () => {
    const pastEvent: IEvent = {
      id: uuidv4(),
      name: "Event in the past",
      description: "",
      date: new Date(2019, 0, 20),
      place: "",
      imageUrl: "",
    };

    const upcomingEvent: IEvent = {
      id: uuidv4(),
      name: "Event in the future",
      description: "",
      date: new Date(2021, 0, 20),
      place: "",
      imageUrl: "",
    };

    const events = [pastEvent, upcomingEvent];

    const cutOffDate = new Date(2020, 9, 27);
    const result = selectPastAndUpcomingEvents(events, cutOffDate);

    expect(result.pastEvents).toStrictEqual([pastEvent]);
    expect(result.upcomingEvents).toStrictEqual([upcomingEvent]);
  });

  test("n = 3, event today", () => {
    const cutOffDate = new Date(2020, 9, 27);

    const pastEvent: IEvent = {
      id: uuidv4(),
      name: "Event in the past",
      description: "",
      date: new Date(2019, 0, 20),
      place: "",
      imageUrl: "",
    };

    const upcomingEvent: IEvent = {
      id: uuidv4(),
      name: "Event in the future",
      description: "",
      date: new Date(2021, 0, 20),
      place: "",
      imageUrl: "",
    };

    const todayEvent: IEvent = {
      id: uuidv4(),
      name: "Event today",
      description: "",
      date: cutOffDate,
      place: "",
      imageUrl: "",
    };

    const events = [pastEvent, todayEvent, upcomingEvent];

    const result = selectPastAndUpcomingEvents(events, cutOffDate);

    expect(result.pastEvents).toStrictEqual([pastEvent]);
    expect(result.upcomingEvents).toStrictEqual([todayEvent, upcomingEvent]);
  });

  test("n = 3, not exact match", () => {
    const cutOffDate = new Date(2020, 9, 27);

    const pastEvent: IEvent = {
      id: uuidv4(),
      name: "",
      description: "",
      date: new Date(2019, 0, 20),
      place: "",
      imageUrl: "",
    };

    const upcomingEvent1: IEvent = {
      id: uuidv4(),
      name: "",
      description: "",
      date: new Date(2021, 0, 20),
      place: "",
      imageUrl: "",
    };

    const upcomingEvent2: IEvent = {
      id: uuidv4(),
      name: "",
      description: "",
      date: new Date(2023, 0, 20),
      place: "",
      imageUrl: "",
    };

    const events = [pastEvent, upcomingEvent1, upcomingEvent2];

    const result = selectPastAndUpcomingEvents(events, cutOffDate);

    expect(result.pastEvents).toStrictEqual([pastEvent]);
    expect(result.upcomingEvents).toStrictEqual([
      upcomingEvent1,
      upcomingEvent2,
    ]);
  });

  test("n = 3, event yesterday", () => {
    const cutOffDate = new Date(2020, 9, 27);

    const pastEvent1: IEvent = {
      id: uuidv4(),
      name: "",
      description: "",
      date: new Date(2019, 0, 20),
      place: "",
      imageUrl: "",
    };
    const pastEvent2: IEvent = {
      id: uuidv4(),
      name: "",
      description: "",
      date: new Date(2020, 9, 26),
      place: "",
      imageUrl: "",
    };

    const upcomingEvent: IEvent = {
      id: uuidv4(),
      name: "",
      description: "",
      date: new Date(2023, 0, 20),
      place: "",
      imageUrl: "",
    };

    const events = [pastEvent1, pastEvent2, upcomingEvent];

    const result = selectPastAndUpcomingEvents(events, cutOffDate);

    expect(result.pastEvents).toStrictEqual([pastEvent2, pastEvent1]);
    expect(result.upcomingEvents).toStrictEqual([upcomingEvent]);
  });

  test("n = 8, not sorted", () => {
    const cutOffDate = new Date(2020, 9, 27);

    const pastEvent1: IEvent = {
      id: uuidv4(),
      name: "Event in the past",
      description: "",
      date: new Date(2010, 0, 20),
      place: "",
      imageUrl: "",
    };

    const pastEvent2: IEvent = {
      id: uuidv4(),
      name: "Event in the past",
      description: "",
      date: new Date(2011, 0, 20),
      place: "",
      imageUrl: "",
    };

    const todayEvent: IEvent = {
      id: uuidv4(),
      name: "Event in the past",
      description: "",
      date: cutOffDate,
      place: "",
      imageUrl: "",
    };

    const upcomingEvent1: IEvent = {
      id: uuidv4(),
      name: "Event in the future",
      description: "",
      date: new Date(2021, 0, 20),
      place: "",
      imageUrl: "",
    };

    const upcomingEvent2: IEvent = {
      id: uuidv4(),
      name: "Event in the future 2",
      description: "",
      date: new Date(2022, 0, 20),
      place: "",
      imageUrl: "",
    };
    const upcomingEvent3: IEvent = {
      id: uuidv4(),
      name: "Event in the future 3",
      description: "",
      date: new Date(2023, 0, 20),
      place: "",
      imageUrl: "",
    };
    const upcomingEvent4: IEvent = {
      id: uuidv4(),
      name: "Event in the future 3",
      description: "",
      date: new Date(2023, 0, 20),
      place: "",
      imageUrl: "",
    };

    const events = [
      pastEvent1,
      upcomingEvent4,
      pastEvent2,
      upcomingEvent1,
      todayEvent,
      upcomingEvent2,
      upcomingEvent3,
    ];

    const result = selectPastAndUpcomingEvents(events, cutOffDate);

    expect(result.pastEvents).toStrictEqual([pastEvent2, pastEvent1]);
    expect(result.upcomingEvents).toStrictEqual([
      todayEvent,
      upcomingEvent1,
      upcomingEvent2,
      upcomingEvent3,
      upcomingEvent4,
    ]);
  });
});
