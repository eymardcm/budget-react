import React from "react";
import DisplayBalance from "./DisplayBalance";
import { Grid, Segment } from "semantic-ui-react";

export default function DisplayBalances(props) {
    return (
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title={"Income:"} value={"1050.50"} color={'green'}/>
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance title={"Expenses:"} value={"623.30"} color={'red'}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
};