export const BASE_URL = "https://dev.api.deputyregistrar.net/api/v2";

export const dateFormat = (date) => {
  return new Intl.DateTimeFormat("en-US").format(new Date(date));
};
