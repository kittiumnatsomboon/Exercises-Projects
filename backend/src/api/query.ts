import express, { Application, Request, Response, Router } from 'express';
import {prisma} from "./database";
const app: Application = express();
const router = Router();

router.get('/', async(req: Request, res: Response) => {
    const user = await prisma.user.findMany();
    res.json({user});
});

export default router;