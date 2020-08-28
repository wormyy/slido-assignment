import React, { useState } from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
        <Typography paragraph>{event.place}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          Buy ticket
        </Button>
        <Box marginLeft={2}>
          <Button
            onClick={() => setExpanded(!expanded)}
            size="small"
            aria-expanded={expanded}
            aria-label="show more"
          >
            Show details
          </Button>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{event.description}</Typography>
        </CardContent>
      </Collapse>
    </StyledEventCard>
  );
};

export default Event;
