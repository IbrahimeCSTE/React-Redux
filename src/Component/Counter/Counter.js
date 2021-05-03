import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "../../Component/UseReducer/Action";
const Counter = () => {
  const count = useSelector((state) => state.reducer.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Count:{count}</h3>
      <button type="button" onClick={() => dispatch(Increment())}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(Decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
