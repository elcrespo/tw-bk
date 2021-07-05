import { Request, Response } from 'express';

export const baseController = (controller: (req: Request, res: Response) => Promise<any>) => {
    return async (req: Request, res: Response) => {
        const data = await controller(req, res);
        // here we could add common data to all the controllers reponse.
        const newData = {
            ...data
        }
        res.send(newData);
    }
}