import React from "react";
import { IEvent } from "../App";
import Event from "./Event";
import Grid from "@material-ui/core/Grid";
export interface EventProps {
  events: IEvent[];
}

const EventList: React.SFC<EventProps> = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <Grid key={event.id} item xs={12} md={4} lg={3}>
          <Event event={event} />
        </Grid>
      ))}
    </>
  );
};

export default EventList;
