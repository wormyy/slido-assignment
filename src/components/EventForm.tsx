import React from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";

import styled from "styled-components";
import { IEvent } from '../App';

export interface EventFormProps {
  onAddEvent: (event: IEvent) => void;
}

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

const EventForm: React.SFC<EventFormProps> = ({ onAddEvent }) => {
  const {  control, handleSubmit, errors } = useForm<IEvent>();
  console.log("errors: ", errors);
  const onSubmit = (data) => console.log(data);

  return (
    <Card>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <StyledCardContent>
          <h2>Add Event</h2>
          <Controller
            name="name"
            label="Event name"
            as={TextField}
            control={control}
            defaultValue=""
          />
          <Controller
            name="date"
            label="Event date"
            as={TextField}
            control={control}
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginTop: 16 }}
          />
        </StyledCardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            Add event
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default EventForm;
