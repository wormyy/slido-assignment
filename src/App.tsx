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
  date: Date;
  place: string;
}

const initialEvents: IEvent[] = [
  {
    name: "React Day Berlin 2021",
    date: new Date(2021, 0, 20),
    place: "Berlin, Germany",
  },
  {
    name: "React Day Bangalore 2021",
    date: new Date(2021, 0, 20),
    place: "Bangalore, India",
  },
  {
    name: "Reactathon 2020",
    date: new Date(2020, 2, 30),
    place: "San Francisco, CA",
  },
  {
    name: "React Alicante",
    date: new Date(2019, 4, 3),
    place: "Alicante, Spain",
  },
  {
    name: "ReactEurope 2020",
    date: new Date(2020, 4, 3),
    place: "Paris, France",
  },
  {
    name: "React Finland 2020",
    date: new Date(2020, 4, 24),
    place: "Helsinki, FI",
  },
];

function App() {
  // const [events, setEvents] = useState(initialEvents);
  const [events] = useState(initialEvents);

  return (
    <AppContainer>
      <h1>Events</h1>
      <EventForm />
      <EventList events={events} />
    </AppContainer>
  );
}

export default App;
