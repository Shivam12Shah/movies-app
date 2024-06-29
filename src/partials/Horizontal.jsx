import React from "react";
import { Link } from "react-router-dom";

const Horizontal = ({ data }) => {
  return (
    <div className="w-full h-[41vh]">
      <div className="div w-full h-[44vh] flex gap-2 overflow-x-auto ">
        {data.length > 0 ? data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[200px] h-full  bg-zinc-900 p-2 rounded-md"
          >
            <img
              className="w-full h-[50%] object-cover
            "
              src={`https://image.tmdb.org/t/p/w500${
                d.backdrop_path || d.poster_path
              })`}
              alt=""
            />
            <h1 className="text-md font-semibold text-zinc-400 leading-[18px] my-2">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="text-sm  text-zinc-400  ">
              {d.overview.slice(0, 50)}{" "}
              <span className="text-blue-500 text-sm">More</span>
            </p>
          </Link>
        )) : <h1 className="text-3xl font-bold text-white">Nothing to Show</h1>}
      </div>
    </div>
  );
};

export default Horizontal;
