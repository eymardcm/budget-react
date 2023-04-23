import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

export default function EntryLines({ entries, deleteEntry, setDescription, editEntry }) {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          key={entry.id}
          {...entry}
          deleteEntry={deleteEntry}
          setDescription={setDescription}
          editEntry={editEntry}
        />
      ))}
    </Container>
  );
}
