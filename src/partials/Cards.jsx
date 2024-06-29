import React from "react";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";

const Cards = ({ data,title }) => {
  console.log(title);
  console.log(data);

  return data ? (
    <div className="flex flex-wrap text-white gap-3 justify-center bg-[#1F1E24] px-10 w-full h-full relative">
      {data &&
        data.map((movie, index) => (
          <Link to={`/${movie.media_type || title}/details/${movie.id}`} key={index} className="w-[200px] relative">
            <img
              src={`https://image.tmdb.org/t/p/w185/${
                movie.poster_path || movie.profile_path
              }`}
              alt={movie.title}
            />
            <h3 className="font-semibold">{movie.title || movie.name}</h3>

            {movie.vote_average && (
              <div className="text-white text-xs rounded-full absolute bottom-16 right-5 w-[30px] h-[30px]  flex justify-center items-center bg-yellow-400">
                {(movie.vote_average * 10).toFixed()}
                <sup>%</sup>
              </div>
            )}
          </Link>
        ))}
    </div>
  ) : (
    <Loading />
  );
};

export default Cards;
