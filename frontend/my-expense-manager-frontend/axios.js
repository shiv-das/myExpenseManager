import axios from "axios";
let authKey;
if (typeof window !== "undefined") {
  // Perform localStorage action
  authKey = localStorage.getItem("x-auth-token");
}

export default axios.create(() => {
  return {
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      authorization: authKey,
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
});
