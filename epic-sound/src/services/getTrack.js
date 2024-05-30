import axios from "axios";

const getTrackURL = (trackId) =>
  `${process.env.NEXT_PUBLIC_TRACK}/${trackId}?app_name=${process.env.NEXT_PUBLIC_APP_NAME}`;

const getTrack = (trackId) =>
  fetch(getTrackURL(trackId))
    .then(res => res.json())
    .catch(error => {
      console.log(error);
      throw error.message;
    });
export default getTrack;
