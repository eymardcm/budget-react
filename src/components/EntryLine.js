import React, { Fragment } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

export default function EntryLine({
  id,
  description,
  setDescription,
  value,
  isExpense = true,
  deleteEntry,
  editEntry
}) {
  
  return (
    <Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={() => editEntry(id)} />
              <Icon name="trash" onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
}
