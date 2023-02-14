import Form from "./components/Form";
// import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import Activities from "./components/Activities";
import "./App.css";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleAddActivity(act) {
    setActivities([
      {
        id: uid(),
        act,
        isChecked: false,
      },
      ...activities,
    ]);
  }

  return (
    <div className="App">
      <Activities activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
