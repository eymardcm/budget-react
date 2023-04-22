import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

export default function NewEntryForn(props) {
  return (
    <Form unstackable>
      <Form.Group style={{ marginTop: 20 }}>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing."
        />
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          placeholder="100.00"
          iconPosition="left"
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
}
