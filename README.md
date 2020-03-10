# combineReducers function

this is a lightweight combineReducers function for reducers. works with either `redux` or `useReducer`.

# installation

yarn

```
yarn add @abdulghani/combinereducer
```

npm

```
npm install @abdulghani/combinereducer
```

# usage

```javascript
import combineReducer from "@abdulghani/combinereducer";
import { reducerOne, reducerTwo } from "somewhere";

const combinedReducers = combineReducer({
  page: reducerOne,
  data: reducerTwo
});

const MyApp = () => {
  const [state, dispatch] = useReducer(combinedReducers);

  // render
};
```
