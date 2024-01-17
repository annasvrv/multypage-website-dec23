import axios from "axios";

// when put this app online - need to change URL to that host url
export default axios.create({
  baseURL: "http://localhost:3500",
});
