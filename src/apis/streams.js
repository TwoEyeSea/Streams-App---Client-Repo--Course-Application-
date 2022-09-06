import axios from "axios";
// Using json-server@0.17.0 for maintaining a list of streams as json objects.

export default axios.create({
  baseURL: "http://localhost:3001",
});
