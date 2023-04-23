import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForn from "./EntryForm";

export default function ModalEdit({
  isOpen,
  setIsOpen,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForn
          description={description}
          value={value}
          setDescription={setDescription}
          setValue={setValue}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button primary onClick={() => setIsOpen(false)}>Ok</Button>
      </Modal.Actions>
    </Modal>
  );
}
