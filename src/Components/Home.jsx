import React, { useEffect, useState } from "react";
import Sidenav from "../partials/Sidenav";
import Topnav from "../partials/Topnav";
import axios from "../utils/axios"
import Header from "../partials/Header";
import Horizontal from "../partials/Horizontal";
import Loading from "./Loading";
import Dropdown from "../partials/Dropdown";

const Home = () => {
  document.title = "IMDB || Home";

  const[wallpaper, setwallpaper] =useState(null)
  const[trending, settrending] =useState(null)
  const [Getcategory, setGetcategory] = useState("all")

  console.log(Getcategory);
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
      const { data } = await axios.get(`/trending/${Getcategory}/day`);
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getTrending()
    !wallpaper && getHeaderWallpaper();
    !trending && getTrending();

  },[Getcategory])
  console.log(trending);
  return trending && wallpaper ? (
    <div className="flex">
      <Sidenav />
      <div className="sidebar w-[80%] h-full px-10 overflow-y-auto pb-5">
        <Topnav/>
        <Header data={wallpaper}/>
        <div className="flex justify-between items-center">
        <h1 className="text-xl text-zinc-400 font-semibold my-4">Trending</h1>
        <Dropdown func={e=>setGetcategory(e.target.value)} title="filter" option={["tv", "movie", "all"]}/>
      </div>
        <Horizontal data={trending} title={Getcategory} />
      </div>
    </div>
  ): <Loading/>
};

export default Home;
