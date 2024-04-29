import axios from "axios";

console.log(process.env.NEXT_PUBLIC_TRENDING_TRACKS);
async function trendingTracks() {
  const getTrendingTracks = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_TRENDING_TRACKS +
          process.env.NEXT_PUBLIC_APP_NAME
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  await getTrendingTracks();
}

export default trendingTracks;
