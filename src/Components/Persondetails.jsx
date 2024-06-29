import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asycloadpersons } from "../store/actions/personAction";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  Outlet,
} from "react-router-dom";
import { removePersons } from "../store/reducers/personSlice";
import Loading from "../Components/Loading";
import Horizontal from "../partials/Horizontal";

const Persondetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();

  console.log(info);
  useEffect(() => {
    dispatch(asycloadpersons(id));
    return () => {
      dispatch(removePersons());
    };
  }, [id]);

  return info ? (
    <div className=" px-10 ">
      <nav className="flex gap-8 h-[10vh] items-center text-xl text-white">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-xl hover:text-[#6556CD] font-semibold pr-4"
        ></Link>
      </nav>
      <div className="w-[100%] flex px-20 gap-10">
        <div className="left w-[20%] ">
          <img
            className="w-[100%]"
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.profile_path || info.detail.backdrop_path
            }`}
            alt=""
          />
          <hr className="my-5" />
          <div className="links text-white flex gap-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${
                info.enternalid && info.enternalid.wikidata_id
              }`}
            >
              <i className="ri-earth-line"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i class="ri-facebook-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i class="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i class="ri-twitter-x-fill"></i>
            </a>
          </div>

          <div className="div">
            <h1 className="text-xl mt-3 text-zinc-400 font-semibold">
              Personal Info
            </h1>
            <h1 className="text-zinc-400 text-sm mt-2">Known For</h1>
            <h1 className="text-zinc-400 text-sm">
              {info.detail.known_for_department}
            </h1>
            <h1 className="text-zinc-400 text-sm mt-2">Gender</h1>
            <h1 className="text-zinc-400 text-sm">
              {info.detail.gender === 2 ? "Male" : "Female"}
            </h1>
            <h1 className="text-zinc-400 text-sm mt-2">Date Of Birth</h1>
            <h1 className="text-zinc-400 text-sm">
              {info.detail.gender === 2 ? "Male" : "Female"}
            </h1>
          </div>
        </div>
        <div className="w-[80%] flex flex-col">
          <h1 className="text-zinc-400 text-4xl font-semibold">{info.detail.name}</h1>
          <h1  className="my-2 text-lg font-semibold text-zinc-400">BioGraphy</h1>
          <p className="text-sm text-slate-500">{info.detail.biography}</p>
          <h1  className="my-2 text-lg font-semibold text-zinc-400">Famous for</h1>
          <Horizontal data={info.combinedCredits.cast} />
        </div>

      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Persondetails;
