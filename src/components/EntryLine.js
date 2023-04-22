import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

export default function EntryLine({ value, isExpense = false }) {
  return (
    <Segment color={isExpense ? "green" : "red"}>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            { isExpense ? "Income" : "Expense" }
          </Grid.Column>
          <Grid.Column width={3} textAlign="right">
            {value}
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered />
            <Icon name="trash" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
