import axios from "axios";

async function getAlbum(albumId) {
  try {
    const response = await axios.get(`
      ${process.env.NEXT_PUBLIC_ALBUM}/${albumId}?app_name=${process.env.NEXT_PUBLIC_APP_NAME}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export default getAlbum;
