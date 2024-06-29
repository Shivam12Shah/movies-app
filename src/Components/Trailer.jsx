import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Notfound from "./Notfound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideos = useSelector((state) => state[category].info.videos);
  console.log(ytvideos);

  return (
    <div className="absolute bg-[rgba(0,0,0,.98)] z-100 top-0 left-0 w-full h-screen flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="absolute top-10 ri-close-line right-10 text-2xl hover:text-[#6556CD] font-semibold text-white"
      ></Link>
      {
        ytvideos ? (<ReactPlayer
            height={480}
            width={1080}
            url={`https://www.youtube.com/watch?v=${ytvideos.key}`}
          />): <Notfound/>
      }
    </div>
  )
};

export default Trailer;
