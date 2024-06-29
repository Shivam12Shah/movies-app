import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios"
import Loading from "./Loading";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../partials/Cards";

const Populer = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const Getpopular = async () => {
        try {
          const { data } = await axios.get(
            `/${category}/popular?page=${page}`
          );
          // setpopular(data.results);
          console.log(data.results);
    
          if (data.results.length > 0) {
            setpopular((prev) => [...prev, ...data.results]);
            setpage(page + 1);
          } else {
            sethasMore(false);
          }
        } catch (error) {
          console.log("error: ", error);
        }
      };
      // console.log(popular);
    
      const refreshhhandell = () => {
        if (popular.length === 0) {
          Getpopular();
        } else {
          setpage(1);
          setpopular([]);
          Getpopular();
        }
      };
    
      useEffect(() => {
        refreshhhandell();
      }, [category]);

      return popular.length > 0 ? (
        <div className="w-screen">
          <div className="popular w-full flex items-center text-white h-[13vh] px-10">
            <h1 className="text-xl flex font-semibold ">
              {" "}
              <i
                onClick={() => navigate(-1)}
                className="ri-arrow-left-line text-xl hover:text-[#6556CD] pr-4"
              ></i>
               Popular  {category}
            </h1>
            <Topnav />
            <div className="fiv flex gap-2 w-1/3">
              <Dropdown
                title="category"
                option={["movie", "tv"]}
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
            dataLength={popular.length}
            next={Getpopular}
            hasMore={hasMore}
            loader={<h1>loading</h1>}
          >
            <Cards data={popular} title={category} />
          </InfiniteScroll>
        </div>
      ) : (
        <Loading />
      );
}

export default Populer