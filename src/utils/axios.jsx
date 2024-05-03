import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDVlYTRhYmE4YTc2ZWIyNTc2OGI4NjNmMzI5OWM0OSIsInN1YiI6IjY2MmExOTdkMWM2YWE3MDBiNDkyNmFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tfDr7PwGWb3TtZJorapFBlBo95lROcyUSYByAoGvczA",
  },
});


export default instance;