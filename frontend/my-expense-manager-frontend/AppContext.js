import React, { createContext, useReducer } from "react";
import _ from "lodash";

const AppContext = createContext({});

const initialState = {
  expenses: {},
  auth: {
    isSignedIn: false,
    user: null,
  },
};

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "isAuth":
      return {
        ...state,
        auth: { isSignedIn: action.payload.flag, user: action.payload.user },
      };
    case "fetchExpenses":
      return { ...state, expenses: _.mapKeys(action.payload, "_id") };
    default:
      return { ...state };
  }
};

const AppContextProvider = (props) => {
  const appState = { ...initialState };

  const [state, dispatch] = useReducer(reducer, appState);

  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
