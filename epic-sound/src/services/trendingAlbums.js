import axios from "axios";

async function trendingAlbums() {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_TRENDING_ALBUMS);
    console.log("albums",response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export default trendingAlbums;
