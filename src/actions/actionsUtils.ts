export const getApiKey = (): string | undefined =>
  process.env.REACT_APP_LASTFM_KEY;

export const getApiUrl = (): string | undefined =>
  process.env.REACT_APP_LASTFM_URL;

const addLimit = (limit: number | null): string =>
  limit ? "&limit=" + limit : "";

export const getResourceByMbid = (
  mbid: string,
  method: string,
  limit: number | null = null
): string =>
  getApiUrl() +
  "/2.0/?method=" +
  method +
  "&format=json&mbid=" +
  mbid +
  "&api_key=" +
  getApiKey() +
  addLimit(limit);

export const getResourceByCountry = (
  country: string,
  method: string,
  limit: number | null = null
): string =>
  getApiUrl() +
  "/2.0/?method=" +
  method +
  "&format=json&country=" +
  country +
  "&api_key=" +
  getApiKey() +
  addLimit(limit);
