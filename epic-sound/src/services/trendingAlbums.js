import axios from "axios";

async function trendingAlbums() {
  const url = `${process.env.NEXT_PUBLIC_TRENDING_ALBUMS}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export default trendingAlbums;
