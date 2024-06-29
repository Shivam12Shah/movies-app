import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios"
import Loading from "./Loading";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../partials/Cards";


const Movies = () => {

    const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const GetMovie = async () => {
        try {
          const { data } = await axios.get(
            `/movie/${category}?page=${page}`
          );
          // setmovie(data.results);
          console.log(data.results);
    
          if (data.results.length > 0) {
            setmovie((prev) => [...prev, ...data.results]);
            setpage(page + 1);
          } else {
            sethasMore(false);
          }
        } catch (error) {
          console.log("error: ", error);
        }
      };
      // console.log(movie);
    
      const refreshhhandell = () => {
        if (movie.length === 0) {
          GetMovie();
        } else {
          setpage(1);
          setmovie([]);
          GetMovie();
        }
      };
    
      useEffect(() => {
        refreshhhandell();
      }, [category]);

      return movie.length > 0 ? (
        <div className="w-screen">
          <div className="movie w-full flex items-center text-white h-[13vh] px-10">
            <h1 className="text-xl flex font-semibold ">
              {" "}
              <i
                onClick={() => navigate(-1)}
                className="ri-arrow-left-line text-xl hover:text-[#6556CD] pr-4"
              ></i>
               movie {category}
            </h1>
            <Topnav />
            <div className="fiv flex gap-2 w-1/3">
              <Dropdown
                title="category"
                option={["popular", "top_rated",  "upcoming", "now_playing"]}
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
            dataLength={movie.length}
            next={GetMovie}
            hasMore={hasMore}
            loader={<h1>loading</h1>}
          >
            <Cards data={movie} />
          </InfiniteScroll>
        </div>
      ) : (
        <Loading />
      );
}

export default Movies