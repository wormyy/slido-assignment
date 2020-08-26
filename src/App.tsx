import React, { useState } from "react";
import styled from "styled-components";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";

const AppContainer = styled.div`
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;

export interface IEvent {
  name: string;
  description: string;
  date: Date;
  place: string;
}

const initialEvents: IEvent[] = [
  {
    name: "React Day Berlin 2021",
    description:
      "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2021, 0, 20),
    place: "Berlin, Germany",
  },
  {
    name: "React Day Bangalore 2021",
    description:
      "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2021, 0, 20),
    place: "Bangalore, India",
  },
  {
    name: "Reactathon 2020",
    description:
      "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2020, 2, 30),
    place: "San Francisco, CA",
  },
  {
    name: "React Alicante",
    description:
      "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2019, 4, 3),
    place: "Alicante, Spain",
  },
  {
    name: "ReactEurope 2020",
    description:
      "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2020, 4, 3),
    place: "Paris, France",
  },
  {
    name: "React Finland 2020",
    description:
      "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2020, 4, 24),
    place: "Helsinki, FI",
  },
];

function App() {
  const [events, setEvents] = useState(initialEvents);

  const onAddEvent = (event: IEvent) => {
    setEvents([...events, event]);
  };
  return (
    <AppContainer>
      <h1>Events</h1>
      <EventForm onAddEvent={onAddEvent} />
      <EventList events={events} />
    </AppContainer>
  );
}

export default App;
