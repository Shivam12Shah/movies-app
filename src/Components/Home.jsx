import React, { useEffect, useState } from "react";
import Sidenav from "../partials/Sidenav";
import Topnav from "../partials/Topnav";
import axios from "../utils/axios"
import Header from "../partials/Header";

const Home = () => {
  document.title = "IMDB || Home";

  const[wallpaper, setwallpaper] =useState(null)

  const getHeaderWallpaper = async()=> {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomimge = data.results[(Math.random()*data.results.length).toFixed()]
      setwallpaper(randomimge);
      

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    !wallpaper && getHeaderWallpaper();

  },[])
  return wallpaper ? (
    <>
      <Sidenav />
      <div className="sidebar w-[80%] h-full px-10">
        <Topnav/>
        <Header data={wallpaper}/>
      </div>
    </>
  ): <h1>loading</h1>
};

export default Home;
