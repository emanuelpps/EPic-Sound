import axios from "axios";

async function trendingTracks() {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_TRENDING_TRACKS + process.env.NEXT_PUBLIC_APP_NAME
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export default trendingTracks;
