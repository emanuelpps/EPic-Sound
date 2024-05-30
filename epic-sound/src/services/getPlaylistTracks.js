async function getPlaylistTracks(playlistId) {
  const url = `${process.env.NEXT_PUBLIC_PLAYLIST_TRACKS}/${playlistId}/tracks?app_name=${process.env.NEXT_PUBLIC_APP_NAME}`;
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

export default getPlaylistTracks;
