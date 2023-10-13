export const get = async (path: string, queryParams: string = '', cache: boolean = true) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}${path}?api_key=${process.env.TMDB_KEY}&${queryParams}`, {
      cache: cache ? 'force-cache' : 'no-store',
    });
    const response = await res.json();
    if (response?.success !== undefined) throw new Error(response.status_message);
    else return response.hasOwnProperty('results') ? response.results : response;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
