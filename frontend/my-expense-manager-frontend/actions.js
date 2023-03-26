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
