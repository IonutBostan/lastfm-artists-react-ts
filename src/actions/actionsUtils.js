export const getApiKey = () => process.env.REACT_APP_LASTFM_KEY;
export const getApiUrl = () => process.env.REACT_APP_LASTFM_URL;

const addLimit = limit => (limit ? "&limit=" + limit : "");

export const getResourceByMbid = (mbid, method, limit = null) =>
  getApiUrl() +
  "/2.0/?method=" +
  method +
  "&format=json&mbid=" +
  mbid +
  "&api_key=" +
  getApiKey() +
  addLimit(limit);

export const getResourceByCountry = (country, method, limit = null) =>
  getApiUrl() +
  "/2.0/?method=" +
  method +
  "&format=json&country=" +
  country +
  "&api_key=" +
  getApiKey() +
  addLimit(limit);
