import React, { useState } from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { IEvent } from "../types/Event";

export interface EventProps {
  event: IEvent;
}

const StyledEventCard = styled(Card)`
  margin-top: 16px;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

const Event: React.SFC<EventProps> = ({ event }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <StyledEventCard>
      <StyledCardMedia image={event.imageUrl} title="Event photo" />
      <CardContent>
        <Typography variant="h5" noWrap>
          {event.name}
        </Typography>
        <Typography variant="subtitle1">
          {event.date.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
            day: "numeric",
          })}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          Show more
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Place: {event.place}</Typography>
          <Typography paragraph>{event.description}</Typography>
        </CardContent>
      </Collapse>
    </StyledEventCard>
  );
};

export default Event;
