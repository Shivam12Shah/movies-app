import React, { useDebugValue, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import axios from "../utils/axios";
import Cards from "../partials/Cards";
import Loading from "../Components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `trending/${category}/${duration}?page=${page}`
      );
      // settrending(data.results);
      console.log(data.results);

      if (data.results.length > 0) {
        settrending((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  // console.log(trending);

  const refreshhhandell = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refreshhhandell();
  }, [duration, category]);
  console.log(trending);
  return trending.length > 0 ? (
    <div className="w-screen">
      <div className="trending w-full flex items-center text-white h-[13vh] px-10">
        <h1 className="text-xl flex font-semibold flex">
          {" "}
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-xl hover:text-[#6556CD] pr-4"
          ></i>{" "}
          Trending  {category}
        </h1>
        <Topnav />
        <div className="fiv flex gap-2 w-1/3">
          <Dropdown
            title="category"
            option={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <Dropdown
            title="duration"
            option={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>loading</h1>}
      >
        <Cards data={trending} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
