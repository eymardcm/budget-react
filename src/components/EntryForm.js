import { Fragment } from "react";
import { Form, Segment, Checkbox } from "semantic-ui-react";

export default function EntryForm({description, value, setDescription, setValue, isExpense, setIsExpense}) {
  return (
    <Fragment>
      <Form.Group style={{ marginTop: 20 }}>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          value={value}
          placeholder="100.00"
          onChange={(event) => setValue(event.target.value)}
          iconPosition="left"
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="Is expense"
          checked={isExpense}
          onChange={() => setIsExpense(!isExpense)}
        />
      </Segment>
    </Fragment>
  );
}
