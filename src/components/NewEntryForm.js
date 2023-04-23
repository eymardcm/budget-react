import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

export default function NewEntryForn({ addEntry, description, value, setDescription, setValue, isExpense, setIsExpense }) {
  
  return (
    <Form unstackable>
      <EntryForm 
        description={description} 
        value={value} 
        setDescription={setDescription} 
        setValue={setValue} 
        isExpense={isExpense} 
        setIsExpense={setIsExpense}/>
      <ButtonSaveOrCancel
        addEntry={addEntry}
      />
    </Form>
  );
}
