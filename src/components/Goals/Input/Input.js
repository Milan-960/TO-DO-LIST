import React, { useState } from "react";

import Button from "../../Button/Button";
import "./Input.css";

function Input(props) {
  const [enteredValue, setEnteredValue] = useState("");

  const [isValid, setIsValid] = useState(true);

  const InputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label> Goal For Tomorrow </label>
        <input
          type="text"
          onChange={InputChangeHandler}
          required=""
          placeholder="Write your Goals To Stay FOCUSED!!"
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}
export default Input;
