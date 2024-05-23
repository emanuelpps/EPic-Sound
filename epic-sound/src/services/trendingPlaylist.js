import axios from "axios";

async function trendingPlaylist() {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_TRENDING_PLAYLIST +
        process.env.NEXT_PUBLIC_APP_NAME
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export default trendingPlaylist;
