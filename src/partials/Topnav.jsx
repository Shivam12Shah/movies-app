import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../src/utils/axios";
import noimage from "../../public/noimage.png"

const Topnav = () => {
  const [query, setquery] = useState("");
  const [serches, setserches] = useState([]);

  const getsearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setserches(data.results);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsearches();
  }, [query]);
  return (
    <div className="w-full relative ">
      <div className="top w-[60%] flex items-center py-2 gap-2 mx-auto px-2 ">
        <i className="ri-search-2-line text-zinc-200 text-2xl"></i>
        <input
          onChange={(e) => setquery(e.target.value)}
          value={query}
          className="w-[90%] text-xl px-3 py-1 outline-none bg-transparent text-zinc-200 "
          type="text"
          placeholder="Search Any Things"
        />
        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            className="ri-close-fill text-zinc-200 text-2xl"
          ></i>
        )}
      </div>
      <div className="div w-[50%] max-h-[40vh] bg-zinc-900 bg-opacity-80  mx-auto absolute  left-1/2 -translate-x-1/2 overflow-auto">
        {serches ? serches.map((s, i) => (
          <Link
          to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="  w-full px-4 py-3 flex justify-start items-center gap-2 bg-slate-50  border-b-2 "
          >
            <div className="imgdiv w-[50px] h-[50px] ">
              <img className="w-full h-full object-cover" src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/w500${s.profile_path || s.backdrop_path || s.profile_path}`: noimage} alt="" />
            </div>
            <span className="font-semibold text-zinc-800">{s.name || s.title || s.original_name || s.original_title} </span>
          </Link>
        )) : <div>nitkjfkld</div> }
      </div>

    </div>
  );
};

export default Topnav;
