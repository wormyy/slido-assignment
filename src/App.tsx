import React, { useState } from "react";
import styled from "styled-components";
import EventList from "./components/EventList";

const AppContainer = styled.div`
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;

export interface IEvent {
  name: string;
  date: Date;
}

const initialEvents: IEvent[] = [
  {
    name: "Reactive Conf",
    date: new Date(2019, 11, 17),
  },
  {
    name: "React Alicante",
    date: new Date(2019, 4, 3),
  },
];

function App() {
  // const [events, setEvents] = useState(initialEvents);
  const [events] = useState(initialEvents);

  return (
    <AppContainer>
      <h1>Events</h1>
      <EventList events={events} />
    </AppContainer>
  );
}

export default App;
