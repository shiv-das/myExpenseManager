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

export const fetchExpenses = async (pageNum, itemsPerPage) => {
  const response = await axios.get("/expenses", {
    params: { pageNum, itemsPerPage },
  });
  return {
    type: "fetchExpenses",
    payload: response.data,
  };
};

export const searchExpenses = async (searchByName) => {
  const response = await axios.get("/expenses/search", {
    params: { searchByName },
  });
  return {
    type: "searchExpenses",
    payload: response.data,
  };
};
