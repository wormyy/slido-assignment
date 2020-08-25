import React from "react";
import { IEvent } from "../App";
import styled from "styled-components";

export interface EventProps {
  event: IEvent;
}

const StyledEvent = styled.li`
  padding: 0.75rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Event: React.SFC<EventProps> = ({ event }) => {
  return <StyledEvent key={event.name}>{event.name}</StyledEvent>;
};

export default Event;
