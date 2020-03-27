import { Action, Reducers } from "./constants";
import { Reducer } from "react";

const combineReducer = (reducers: Reducers): Reducer<any, Action> => (
  state = {},
  action: Action
) => {
  const nextState = {};
  Object.keys(reducers).forEach(
    key => (nextState[key] = reducers[key](state[key], action))
  );
  return nextState;
};

export default combineReducer;
