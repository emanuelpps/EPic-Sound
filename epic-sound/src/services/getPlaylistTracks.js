import axios from "axios";

async function getPlaylistTracks(playlistId) {
  try {
    const response = await axios.get(`
      ${process.env.NEXT_PUBLIC_PLAYLIST_TRACKS}/${playlistId}/tracks?app_name=${process.env.NEXT_PUBLIC_APP_NAME}`);
    console.log("GETPLAYLIST-TRACKS ------", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export default getPlaylistTracks;
