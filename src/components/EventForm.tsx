import React from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";
import Grid from "@material-ui/core/Grid";

import styled from "styled-components";
import { IEvent } from "../App";
import Typography from "@material-ui/core/Typography";

export interface EventFormProps {
  onAddEvent: (event: IEvent) => void;
}

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

const EventForm: React.SFC<EventFormProps> = ({ onAddEvent }) => {
  const { control, handleSubmit, errors } = useForm<IEvent>();

  return (
    <Grid item xs={12} md={8} lg={6}>
      <Card>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onAddEvent)}>
          <StyledCardContent>
            <Typography variant="h2">Add Event</Typography>
            <Controller
              name="name"
              label="Event name"
              as={TextField}
              control={control}
              rules={{ required: true }}
              defaultValue=""
              error={Boolean(errors.name)}
              data-test-id="input-name"
            />
            <Controller
              name="place"
              label="Place of the event"
              as={TextField}
              control={control}
              rules={{ required: true }}
              defaultValue=""
              error={Boolean(errors.place)}
              data-test-id="input-place"
            />
            <Controller
              name="date"
              label="Event date"
              as={TextField}
              control={control}
              rules={{ required: true }}
              type="date"
              defaultValue="2017-05-24"
              error={Boolean(errors.date)}
              style={{ marginTop: 16 }}
              data-test-id="input-date"
            />
          </StyledCardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              data-test-id="button-submit"
            >
              Add event
            </Button>
          </CardActions>
        </form>
      </Card>
    </Grid>
  );
};

export default EventForm;
