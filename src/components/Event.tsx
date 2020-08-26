import React from "react";
import { IEvent } from "../App";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

export interface EventProps {
  event: IEvent;
}

const StyledEventCard = styled(Card)`
  margin-top: 16px;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

// const Event: React.SFC<EventProps> = ({ event }) => {
//   return <StyledEvent key={event.name}>{event.name}</StyledEvent>;
// };
const Event: React.SFC<EventProps> = ({ event }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <StyledEventCard>
      {/* <CardHeader
        title={event.name}
        subheader={event.date.toLocaleDateString()}
      /> */}
      <StyledCardMedia
        image="https://picsum.photos/400/200"
        title="Event photo"
      />
      <CardContent>
        <Typography variant="h4">{event.name}</Typography>
        <Typography variant="subtitle1">
          {event.date.toLocaleDateString()}
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
