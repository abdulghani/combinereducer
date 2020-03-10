import { Action, Reducers } from "./constants";
import { Reducer } from "react";

const combineReducer = (reducers: Reducers): Reducer<any, Action> => {
  return (state: any, action: Action) => {
    const tempState = { ...state };
    Object.keys(reducers).forEach(key => {
      tempState[key] = reducers[key](tempState[key], action);
    });

    return tempState;
  };
};

export default combineReducer;
