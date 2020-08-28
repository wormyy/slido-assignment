import React, { useState } from "react";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import { Container, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { selectPastAndUpcomingEvents } from "./selectors/EventSelectors";
import { initialEvents, IEvent } from "./types/Event";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [events, setEvents] = useState(initialEvents);

  const onAddEvent = (event: IEvent) => {
    const newEvent = {
      ...event,
      id: uuidv4(),
      date: new Date(event.date),
      imageUrl: "https://picsum.photos/400/200",
    };
    setEvents([...events, newEvent]);
  };

  const today = new Date();
  const { pastEvents, upcomingEvents } = selectPastAndUpcomingEvents(
    events,
    today
  );

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" align="center" gutterBottom>
        Events
      </Typography>
      <Grid container spacing={3}>
        <EventForm onAddEvent={onAddEvent} />
      </Grid>

      <Box marginTop={5} marginBottom={1}>
        <Typography variant="h4">Upcoming events</Typography>
      </Box>
      <Grid container spacing={3}>
        <EventList events={upcomingEvents} />
      </Grid>

      <Box marginTop={5} marginBottom={1}>
        <Typography variant="h4"> Past events</Typography>
      </Box>
      <Grid container spacing={3}>
        <EventList events={pastEvents} />
      </Grid>
    </Container>
  );
}

export default App;
