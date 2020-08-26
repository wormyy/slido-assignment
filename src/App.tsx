import React, { useState } from "react";
// import styled from "styled-components";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import { Container, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export interface IEvent {
  name: string;
  description: string;
  date: Date;
  place: string;
  imageUrl: string;
}

const initialEvents: IEvent[] = [
  {
    name: "React Day Berlin 2021",
    description:
      "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2021, 0, 20),
    place: "Berlin, Germany",
    imageUrl: "https://picsum.photos/seed/123/400/200",
  },
  {
    name: "React Day Bangalore 2021",
    description:
      "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2021, 0, 20),
    place: "Bangalore, India",
    imageUrl: "https://picsum.photos/seed/32/400/200",
  },
  {
    name: "Reactathon 2020",
    description:
      "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2020, 2, 30),
    place: "San Francisco, CA",
    imageUrl: "https://picsum.photos/seed/43/400/200",
  },
  {
    name: "React Alicante",
    description:
      "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2019, 4, 3),
    place: "Alicante, Spain",
    imageUrl: "https://picsum.photos/seed/54/400/200",
  },
  {
    name: "ReactEurope 2020",
    description:
      "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2020, 4, 3),
    place: "Paris, France",
    imageUrl: "https://picsum.photos/seed/34/400/200",
  },
  {
    name: "React Finland 2020",
    description:
      "Reactathon is a developer conference featuring 2 days of technical talks, networking, workshops & activities on all things React. Come hang out with and learn from some of the brightest minds and best speakers in the JS/React community.",
    date: new Date(2020, 4, 24),
    place: "Helsinki, FI",
    imageUrl: "https://picsum.photos/seed/62/400/200",
  },
];

function App() {
  const [events, setEvents] = useState(initialEvents);

  const onAddEvent = (event: IEvent) => {
    setEvents([...events, event]);
  };
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" align="center">
        Events
      </Typography>
      <Grid container spacing={3}>
        <EventForm onAddEvent={onAddEvent} />
      </Grid>

      <Box marginTop={5} marginBottom={1}>
        <Typography variant="h4">Upcoming events</Typography>
      </Box>
      <Grid container spacing={3}>
        <EventList events={events} />
      </Grid>

      <Box marginTop={5} marginBottom={1}>
        <Typography variant="h4"> Past events</Typography>
      </Box>
      <Grid container spacing={3}>
        <EventList events={events} />
      </Grid>
    </Container>
  );
}

export default App;
