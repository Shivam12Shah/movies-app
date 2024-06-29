import axios from "../../utils/axios";
import { loadtvs } from "../reducers/tvSlice";
export const asycloadtvs = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendation = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const watchprovides = await axios.get(`/tv/${id}/watch/providers`);
    let thedata = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendation.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      translations:translations.data.translations.map(t=>t.english_name),
      watchProviders: watchprovides.data.results.IN,
    };
    dispatch(loadtvs(thedata));
    console.log(thedata);
  } catch (error) {
    console.log("error .", error);
  }
};
