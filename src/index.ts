import { Action, Reducers } from "./constants";
import { Reducer } from "react";

const combineReducer = (reducers: Reducers): Reducer<any, Action> => {
  return (state: any, action: Action) => {
    if (!state) state = {};
    Object.keys(reducers).forEach(key => {
      state[key] = reducers[key](state[key], action);
    });
    return state;
  };
};

export default combineReducer;
