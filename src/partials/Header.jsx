import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.4), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/w500${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[50vh] flex flex-col justify-end text-white items-start p-10 rounded-md overflow-hidden"
    >
      <h1 className="text-4xl font-bold">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <Link to={`/${data.media_type}/details/${data.id}`} className="text-sm">{data.overview.slice(0, 200)} <span className="text-blue-600">more .....</span> </Link>

      <div className="movieinfo flex gap-3 mt-2">
        <p className="text-sm ">
          <i className=" text-yellow-600 ri-megaphone-fill mr-2"></i>
          {data.release_date || "NO INFORMATION"}
        </p>
        <p className="text-sm ">
          <i className=" text-yellow-600 ri-album-fill mr-2"></i>
          {data.media_type.toUpperCase()}
        </p>
      </div>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`}  className="bg-[#6556CD] text-sm px-3 py-1 rounded-sm mt-3">
        Watch Trailor
      </Link>
    </div>
  );
};

export default Header;
