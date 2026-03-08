import express, { Application, Request, Response, Router } from 'express';
const app: Application = express();
const router = Router();

interface RegisterBody {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

router.post('/',(req:Request<{}, {}, RegisterBody>,res:Response)=>{
    const { firstname, lastname, email, password } = req.body;

});
export default router;




