import { httpClient } from "../http-factory";

export const getPlaysByUser = (user: string) => {
  return httpClient.get({ url: `/plays-detail?username=${user}`});
};

export const getFriendsByUser = (user: string) => {
  return httpClient.get({ url: `/friend-detail?username=${user}` });
};
