import React, { useEffect, useState } from "react";
import Sidenav from "../partials/Sidenav";
import Topnav from "../partials/Topnav";
import axios from "../utils/axios"
import Header from "../partials/Header";
import Horizontal from "../partials/Horizontal";

const Home = () => {
  document.title = "IMDB || Home";

  const[wallpaper, setwallpaper] =useState(null)
  const[trending, settrending] =useState(null)

  const getHeaderWallpaper = async()=> {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomimge = data.results[(Math.random()*data.results.length).toFixed()]
      setwallpaper(randomimge);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async()=> {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      settrending(data.results);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    !wallpaper && getHeaderWallpaper();
    !trending && getTrending();

  },[])
  console.log(trending);
  return trending && wallpaper ? (
    <>
      <Sidenav />
      <div className="sidebar w-[80%] h-full px-10 overflow-y-auto">
        <Topnav/>
        <Header data={wallpaper}/>
        <Horizontal data={trending} />
      </div>
    </>
  ): <h1>loading</h1>
};

export default Home;
