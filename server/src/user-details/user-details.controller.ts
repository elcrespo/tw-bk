  
import { Request, Response } from 'express';
import { baseController } from '../common';
import { getPlaysByUser, getFriendsByUser } from "./user-details.service";

export const getUserDetailsController = baseController(async (req: Request, res: Response) => {
  console.log('getUserDetailsController');
  const username = req.params.username;
  const playsPromise = getPlaysByUser(username);
  const friendsPromise = getFriendsByUser(username);

  const [plays, friends] = await Promise.all([playsPromise, friendsPromise]).then(([playsResp, friendsResp]) => {
    return [playsResp.data.plays, friendsResp.data.friends];
  });

  return{
    username,
    plays: plays?.length || 0,
    friends: friends?.length || 0,
    tracks: plays
  };
});
