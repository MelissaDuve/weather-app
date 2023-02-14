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

  function isForGoodWeather () {
  const isGoodWeather = true;
  setActivities(activities.filter((activities) => activities.isChecked === isGoodWeather));
  }

  
  function handleDeleteActivity(id) {
    setActivities(activities.filter((activities) => activities.id !==id));
  }

  return (
    <div className="App">

      <Activities onDeleteActivity={handleDeleteActivity} activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
