import {Request, Response} from 'express';

export function first(req: Request, res: Response) {
  res.status(200).send('Typescript!');
};
