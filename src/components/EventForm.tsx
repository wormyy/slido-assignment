import React from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

export interface EventFormProps {}

const StyledTextField = styled(TextField)`
  margin-top: 16px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const EventForm: React.SFC<EventFormProps> = () => {
  return (
    <Card>
      <CardContent>
        <h2>Add Event</h2>
        <StyledForm noValidate autoComplete="off">
          <StyledTextField label="Event name" id="event-name" />
          <StyledTextField
            id="date"
            label="Event date"
            type="date"
            defaultValue="2017-05-24"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginTop: 16 }}
          />
        </StyledForm>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large" color="primary">
          Add event
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventForm;
