import axios from "axios";

async function trendingThisMonth() {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_TRENDING_MONTH);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export default trendingThisMonth;
