import axios from "axios";

async function getTrack(trackId) {
  try {
    const response = await axios.get(`
      ${process.env.NEXT_PUBLIC_TRACK}/${trackId}?app_name=${process.env.NEXT_PUBLIC_APP_NAME}`);
    console.log("GETTRACK", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export default getTrack;
