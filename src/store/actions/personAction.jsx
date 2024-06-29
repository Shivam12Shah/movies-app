import axios from "../../utils/axios";
import { loadPersons } from "../reducers/personSlice";
export const asycloadpersons = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);

    const movieCredits= await axios.get(`/person/${id}/movie_credits`);

    let thedata = {
      detail: detail.data,
      externalid: externalid.data,
      tvCredits:tvCredits.data,
      combinedCredits: combinedCredits.data,
      movieCredits: movieCredits.data,
    };
    dispatch(loadPersons(thedata));
    console.log(thedata);
  } catch (error) {
    console.log("error .", error);
  }
};
