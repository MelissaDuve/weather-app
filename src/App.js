import Form from "./components/Form";
import {useState} from "react";
//import {uid} from "uid";
import './App.css';

function App() {
  return (
    <div className="App">
      <handleAddActivity />
      <Form />
    </div>
  );
}

export default App;

function handleAddActivity () {
  const [activities, setActivities] = useState("");
} return 