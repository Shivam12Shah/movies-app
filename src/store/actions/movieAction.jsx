import axios from "../../utils/axios";
import { loadMovies } from "../reducers/movieSlice";
export const asycloadmovies = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendation = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const watchprovides = await axios.get(`/movie/${id}/watch/providers`);
    let thedata = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendation.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      translations:translations.data.translations.map(t=>t.english_name),
      watchProviders: watchprovides.data.results.IN,
    };
    dispatch(loadMovies(thedata));
    console.log(thedata);
  } catch (error) {
    console.log("error .", error);
  }
};
