import axios from "./api";

export const auth = (user, flag) => {
  console.log(user);
  return {
    type: "isAuth",
    payload: {
      user,
      flag,
    },
  };
};

export const createExpense = async (payload) => {
  console.log(localStorage.getItem("x-auth-token"));
  const response = await axios.post("/expenses", payload, {
    headers: {
      authorization: localStorage.getItem("x-auth-token"),
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return {
    type: "createExpense",
    payload: response.data,
  };
};

export const editExpense = async (payload, id) => {
  const response = await axios.post(`/expenses/edit/${id}`, payload, {
    headers: {
      authorization: localStorage.getItem("x-auth-token"),
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return {
    type: "editExpense",
    payload: response.data,
  };
};

export const fetchExpense = async (id) => {
  console.log("response");
  const response = await axios.get(`/expenses/${id}`);

  return {
    type: "fetchExpense",
    payload: response.data,
  };
};

export const deleteExpense = async (id) => {
  const response = await axios.delete(
    `/expenses/${id}`,
    {},
    {
      headers: {
        authorization: localStorage.getItem("x-auth-token"),
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return {
    type: "deleteExpense",
    payload: id,
  };
};

export const fetchExpenses = async (pageNum, itemsPerPage) => {
  console.log("Im here");
  const response = await axios.get("/expenses", {
    params: { pageNum, itemsPerPage },
  });
  return {
    type: "fetchExpenses",
    payload: response.data,
  };
};

export const searchExpenses = async (searchByName, filterByDateField) => {
  const response = await axios.get("/expenses/search", {
    params: { searchByName, filterByDateField },
  });
  return {
    type: "searchExpenses",
    payload: response.data,
  };
};
