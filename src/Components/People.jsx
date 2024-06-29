import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios"
import Loading from "./Loading";
import Topnav from "../partials/Topnav";
import Dropdown from "../partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "../partials/Cards";
const People = () => {

    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
  
    const GetPerso = async () => {
        try {
          const { data } = await axios.get(
            `/person/${category}?page=${page}`
          );
          // setperson(data.results);
          console.log(data.results);
    
          if (data.results.length > 0) {
            setperson((prev) => [...prev, ...data.results]);
            setpage(page + 1);
          } else {
            sethasMore(false);
          }
        } catch (error) {
          console.log("error: ", error);
        }
      };
      // console.log(person);
    
      const refreshhhandell = () => {
        if (person.length === 0) {
          GetPerso();
        } else {
          setpage(1);
          setperson([]);
          GetPerso();
        }
      };
    
      useEffect(() => {
        refreshhhandell();
      }, [category]);
      return person.length > 0 ? (
        <div className="w-screen">
          <div className="person w-full flex items-center text-white h-[13vh] px-10">
            <h1 className="text-xl flex font-semibold ">
              {" "}
              <i
                onClick={() => navigate(-1)}
                className="ri-arrow-left-line text-xl hover:text-[#6556CD] pr-4"
              ></i>
               People
            </h1>
            <Topnav />
            {/* <div className="fiv flex gap-2 w-1/3">
              <Dropdown
                title="category"
                option={["on_the_air","popular" ,"top_rated","airing_today"]}
                func={(e) => setCategory(e.target.value)}
              />
              <Dropdown
                title="duration"
                option={["week", "day"]}
                func={(e) => setDuration(e.target.value)}
              />
            </div> */}
          </div>
    
          <InfiniteScroll
            dataLength={person.length}
            next={GetPerso}
            hasMore={hasMore}
            loader={<h1>loading</h1>}
          >
            <Cards data={person} title='person' />
          </InfiniteScroll>
        </div>
      ) : (
        <Loading />
      ); 
}

export default People