# combineReducers function
this is a lightweight combineReducers function for reducers.

# usage
```javascript
  import combineReducers from "@abdulghani/combinereducers";
  import { reducerOne, reducerTwo } from "somewhere";
  
  const combinedReducers = combineReducers({
    page: reducerOne,
    data: reducerTwo
  });

  const MyApp = () => {
    const [state, dispatch] = useReducer(combinedReducers);

    // render
  }
```