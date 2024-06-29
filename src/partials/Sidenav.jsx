
import { Link } from "react-router-dom";


const Sidenav = () => {

  

  return (
    <div className="sidebar  w-[20%] h-full border-r-2 border-zinc-600 p-5">
      <h1 className="text-xl text-white  flex gap-2 ">
        <i className="mr-2 ri-clapperboard-fill text-[#6556CD] text-2xl"></i>
        <span>IMDB MOVIES</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-lg gap-1">
        <h1 className="text-white font-semibold mt-6  my-3 text-xl">New Feed</h1>
        <Link to={`/trending`} className="hover:bg-[#6556CD] px-2 rounded-sm hover:text-white py-1">
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link className="hover:bg-[#6556CD] px-2 rounded-sm hover:text-white py-1">
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link className="hover:bg-[#6556CD] px-2 rounded-sm hover:text-white py-1">
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link className="hover:bg-[#6556CD] px-2 rounded-sm hover:text-white py-1">
          <i className="mr-2 ri-tv-fill"></i>
          Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] px-2 rounded-sm hover:text-white py-1">
          <i className="mr-2 ri-team-fill"></i>
          Peoples
        </Link>

        
      </nav> 
      <hr className="my-3 text-zinc-400" />
        <h1 className="text-white font-semibold mt-6  my-3 text-xl">Website Information</h1>
      <div className="websiteinfo flex flex-col text-zinc-400 gap-1">
        <Link className="hover:bg-[#6556CD] px-2 rounded-sm hover:text-white py-1">
          <i className="mr-2 ri-github-fill"></i>
          Github
        </Link>
        <Link className="hover:bg-[#6556CD] px-2 rounded-sm hover:text-white py-1">
          <i className="mr-2 ri-twitter-fill"></i>
          Twitter
        </Link>
        <Link className="hover:bg-[#6556CD] px-2 rounded-sm hover:text-white py-1">
          <i className="mr-2 ri-facebook-fill"></i>
          Facebook
        </Link>
      </div>
    </div>
  );
};

export default Sidenav;
