import axios from "axios";

async function getPlaylist(playlistId) {
  try {
    const response = await axios.get(`
      ${process.env.NEXT_PUBLIC_PLAYLIST}/${playlistId}?app_name=${process.env.NEXT_PUBLIC_APP_NAME}`);
    console.log("GETPLAYLIST ------", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export default getPlaylist;
