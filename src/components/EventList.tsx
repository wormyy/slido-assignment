import React from "react";
import { IEvent } from "../App";
import Event from "./Event";
import styled from "styled-components";

export interface EventProps {
  events: IEvent[];
}

const StyledEventList = styled.ul`
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  padding: 1.5rem 0;
  /* font-size: 1rem; */

  display: flex;
  flex-direction: column;
`;

const EventList: React.SFC<EventProps> = ({ events }) => {
  return (
    <StyledEventList>
      {events.map((event) => (
        <Event key={event.name} event={event} />
      ))}
    </StyledEventList>
  );
};

export default EventList;
