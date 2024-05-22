import axios from "axios";
import { AxiosError } from "axios";

async function trendingTracks() {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_TRENDING_TRACKS + process.env.NEXT_PUBLIC_APP_NAME
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return AxiosError(message);
  }
}

export default trendingTracks;
