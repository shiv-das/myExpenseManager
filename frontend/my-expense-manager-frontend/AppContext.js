import React, { createContext, useReducer } from "react";
import _ from "lodash";

const AppContext = createContext({});

const initialState = {
  expenses: {},
  expense: {},
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
    case "createExpense":
      console.log(action.payload);
      return {
        ...state,
        expenses: { [action.payload._id]: action.payload, ...state.expenses },
      };
    case "editExpense":
      console.log("abcd", action.payload);
      return {
        ...state,
        expenses: { ...state.expenses, [action.payload._id]: action.payload },
      };

    case "deleteExpense":
      return {
        ...state,
        expenses: _.omit(state.expenses, action.payload),
      };
    case "fetchExpenses":
      return { ...state, expenses: _.mapKeys(action.payload, "_id") };

    case "fetchExpense":
      console.log(action.payload);
      return { ...state, expense: action.payload };

    case "searchExpenses":
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
