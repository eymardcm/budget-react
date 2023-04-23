import React from "react";
import { Button } from 'semantic-ui-react';

export default function ButtonSaveOrCancel({addEntry}) {

    return (
        <Button.Group>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary onClick={() => addEntry()}>Ok</Button>
        </Button.Group>
    )
};