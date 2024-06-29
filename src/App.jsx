import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Trending from "./Components/Trending";
import Populer from "./Components/Populer";
import Movies from "./Components/Movies";
import Tvshows from "./Components/Tvshows";
import People from "./Components/People";
import MovieDetailes from "./Components/MovieDetailes";
import TvDetails from "./Components/TvDetails";
import Persondetails from "./Components/Persondetails";
import Trailer from "./Components/Trailer";
import Notfound from "./Components/Notfound";

const App = () => {
  return (
    <div className="w-full h-screen bg-[#1F1E24] flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/populer" element={<Populer />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetailes />}>
          <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<Persondetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
