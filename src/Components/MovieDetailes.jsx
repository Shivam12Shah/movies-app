import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asycloadmovies } from "../store/actions/movieAction";
import { Link, useLocation, useNavigate, useParams, Outlet } from "react-router-dom";
import { removeMovie } from "../store/reducers/movieSlice";
import Loading from "../Components/Loading";
import Horizontal from "../partials/Horizontal";

const MovieDetailes = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asycloadmovies(id));
    return () => {
      dispatch(removeMovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.4), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/w500${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-screen h-[160vh] px-[10%] overflow-hidden relative"
    >
      <nav className="flex gap-8 h-[10vh] items-center text-xl text-white">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-xl hover:text-[#6556CD] font-semibold pr-4"
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.enternalid && info.enternalid.wikidata_id}`}
        >
          <i className="ri-earth-line"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDB
        </a>
      </nav>

      <div className="w-full flex gap-20">
        <div className="imagediv flex flex-col gap-2">
          <img
            className="w-[250px]"
            src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}
            alt=""
          />
        </div>
        <div className="details">
          <h1 className="text-4xl text-white font-extrabold">
            {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
            <small className="text-sm ml-3 font-medium text-zinc-300">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="text-white flex gap-4">
            <span className="w-[35px] h-[35px] flex items-center justify-center bg-yellow-400 rounded-full">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="text-sm text-zinc-300">User score</h1>
            <h1 className="text-sm text-zinc-300">{info.detail.release_date}</h1>
            <h1 className="text-sm text-zinc-300">{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1 className="textsm text-zinc-300"> {info.detail.runtime}min</h1>
          </div>

          <h1 className="text-xl my-3 italic font-semibold text-white">
            {info.detail.tagline}
          </h1>

          <h1 className="text-sm my-3 font-semibold text-white">Overview</h1>
          <p className="w-[600px] text-zinc-200 text-sm">{info.detail.overview}</p>

          <h1 className="text-sm my-3 font-semibold text-white">Translated</h1>
          <div className="w-[600px] text-zinc-200 text-sm flex flex-wrap mb-5">
            <p>{info.translations.join(" ")}</p>
          </div>
          <Link
            className="rounded bg-[#6556CD] px-4 py-2 text-white"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-fill"></i> Play Trailer
          </Link>
        </div>
      </div>

      <div className="flex gap-3 flex-col">
        {info.watchProviders && info.watchProviders.flatrate && (
          <div className="flex items-center gap-4">
            <h1 className="text-white">Available on Flatrate</h1>
            {info.watchProviders.flatrate.map((w) => (
              <img
                className="w-[5vh] rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchProviders && info.watchProviders.rent && (
          <div className="flex items-center gap-4">
            <h1 className="text-white">Available on Rent</h1>
            {info.watchProviders.rent.map((w) => (
              <img
                className="w-[5vh] rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchProviders && info.watchProviders.buy && (
          <div className="flex items-center gap-4">
            <h1 className="text-white">Available on Buy</h1>
            {info.watchProviders.buy.map((w) => (
              <img
                className="w-[5vh] rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
      <hr className="my-10" />
      <h1 className="text-2xl font-semibold text-white my-5">
        Recommendation & Similar Stuff
      </h1>
      <Horizontal data={info.recommendations.length > 0 ? info.recommendations : info.similar} />

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetailes;
