import axios from "axios";

async function streamTrack(trackId) {
  try {
    const response = await axios.get(`
      ${process.env.NEXT_PUBLIC_STREAM_TRACK}/${trackId}/stream?app_name=${process.env.NEXT_PUBLIC_APP_NAME}`);
    console.log("TRACK", response);
    return response.config.url;
  } catch (error) {
    console.log(error);
    return error.message;
  }
  
}


export default streamTrack;
