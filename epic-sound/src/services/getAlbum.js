async function getAlbum(albumId) {
  const url = `${process.env.NEXT_PUBLIC_ALBUM}/${albumId}?app_name=${process.env.NEXT_PUBLIC_APP_NAME}`;
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

export default getAlbum;
