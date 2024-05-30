async function streamTrack(trackId) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STREAM_TRACK}/${trackId}/stream?app_name=${process.env.NEXT_PUBLIC_APP_NAME}`
    );
    const responseUrl = response.url;
    return responseUrl;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export default streamTrack;
