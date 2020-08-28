import React from "react";
import { IEvent } from "../types/Event";
import Event from "./Event";
import Grid from "@material-ui/core/Grid";
export interface EventProps {
  events: IEvent[];
  isPast?: boolean;
}

const EventList: React.SFC<EventProps> = ({ events, isPast = false }) => {
  return (
    <>
      {events.map((event) => (
        <Grid key={event.id} item xs={12} md={4} lg={3}>
          <Event event={event} isPast={isPast} />
        </Grid>
      ))}
    </>
  );
};

export default EventList;
