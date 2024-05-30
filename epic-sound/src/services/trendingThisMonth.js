async function trendingThisMonth() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_TRENDING_MONTH);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

export default trendingThisMonth;
