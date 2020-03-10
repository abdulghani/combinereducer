import { reducer, action, reducers } from "./constants";

const combineReducer = (reducers: reducers): reducer => {
  return (state: any, action: action) => {
    const tempState = { ...state };
    Object.keys(reducers).forEach(key => {
      tempState[key] = reducers[key](tempState[key], action);
    });

    return tempState;
  };
};

export default combineReducer;
