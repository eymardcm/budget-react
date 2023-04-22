import {
  Container
} from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForn from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1"/>
      <DisplayBalance title={"Your Balance"} value={"2550.53"} textAlign="center" size="small"/>
      <DisplayBalances />

      <MainHeader title="History" type="h3"/>
      <EntryLine title={'Something'} value={'$10.00'} isExpense={true} />
      <EntryLine title={'Something else'} value={'$10.00'} />
      <EntryLine title={'Something'} value={'$20'} isExpense={true} />
      <MainHeader title="Add new transaction" type="h3"/>
      <NewEntryForn />
    </Container>
  );
}

export default App;
