import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios"
import Loading from "./Loading";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../partials/Cards";

const Tvshows = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tvshows, settvshows] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTvshows = async () => {
      try {
        const { data } = await axios.get(
          `/tv/${category}?page=${page}`
        );
        // settvshows(data.results);
        console.log(data.results);
  
        if (data.results.length > 0) {
          settvshows((prev) => [...prev, ...data.results]);
          setpage(page + 1);
        } else {
          sethasMore(false);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    };
    // console.log(tvshows);
  
    const refreshhhandell = () => {
      if (tvshows.length === 0) {
        GetTvshows();
      } else {
        setpage(1);
        settvshows([]);
        GetTvshows();
      }
    };
  
    useEffect(() => {
      refreshhhandell();
    }, [category]);
    return tvshows.length > 0 ? (
      <div className="w-screen">
        <div className="tvshows w-full flex items-center text-white h-[13vh] px-10">
          <h1 className="text-xl flex font-semibold ">
            {" "}
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line text-xl hover:text-[#6556CD] pr-4"
            ></i>
             tvshows {category}
          </h1>
          <Topnav />
          <div className="fiv flex gap-2 w-1/3">
            <Dropdown
              title="category"
              option={["on_the_air","popular" ,"top_rated","airing_today"]}
              func={(e) => setCategory(e.target.value)}
            />
            {/* <Dropdown
              title="duration"
              option={["week", "day"]}
              func={(e) => setDuration(e.target.value)}
            /> */}
          </div>
        </div>
  
        <InfiniteScroll
          dataLength={tvshows.length}
          next={GetTvshows}
          hasMore={hasMore}
          loader={<h1>loading</h1>}
        >
          <Cards data={tvshows} />
        </InfiniteScroll>
      </div>
    ) : (
      <Loading />
    );
}

export default Tvshows