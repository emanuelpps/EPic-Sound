async function trendingPlaylist() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TRENDING_PLAYLIST}?app_name=${process.env.NEXT_PUBLIC_APP_NAME}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export default trendingPlaylist;
