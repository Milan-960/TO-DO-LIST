import React, { useState } from "react";

import GoalList from "./components/Goals/GoalList/GoalList";
import Input from "./components/Goals/Input/Input";
import "./App.css";


function App() {
  const [Goals, setGoals] = useState([
    { text: "Do all the hard Work you can!!!", id: "m1" },
    { text: "Do not stope untill you finished", id: "m2" },
    { text: "Therefore You shoud write your GOALS..!!", id: "m3" },
  ]);

  const addGoalHandler = (enteredText) => {
    setGoals((prevGoals) => {
      const updateGoals = [...prevGoals];
      updateGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updateGoals;
    });
  };

  const deleteItemHndler = (goalID) => {
    setGoals((prevGoals) => {
      const updateGoals = prevGoals.filter((goal) => goal.id !== goalID);
      return updateGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}> There Is no goals. Add one To Stay FOCUSED..!! </p>
  );

  if (Goals.length > 0) {
    content = <GoalList items={Goals} onDeleteItem={deleteItemHndler} />;
  }

  return (
    <div>
      <section id="goal-form">
        <Input onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
