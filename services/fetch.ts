export const get = async (path: string, queryParams: string = '', cache: boolean = true) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}${path}?api_key=${process.env.TMDB_KEY}&${queryParams}`, {
      cache: cache ? 'force-cache' : 'no-store',
    });
    const response = await res.json();
    return response.results;
  } catch (error: any) {
    throw new Error(error);
  }
};
