import axios from "axios";

// Perform localStorage action

export default axios.create({
  baseURL: "http://localhost:8080",
});
