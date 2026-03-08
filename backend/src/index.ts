import express, { Application, Request, Response } from 'express';
import  router  from './api/register';
import cors from "cors";

const app: Application = express();
const PORT = 3000;

// Cors dev ตอนนี้ไปก่อน
// const corsOptions = {
//   origin: 'http://localhost:5173/', // Only allow this origin
//   methods: ['GET', 'POST','PUT','DELETE'],      // Only allow GET and POST methods
//   credentials: true              // Allow credentials (cookies, auth headers)
// };

app.use(cors())
app.use(express.json());

app.use('/api/register',router)

app.get('/', (req: Request, res: Response) => {
  res.json({message:"HELLOWORLD"})
});

app.listen(PORT, () => {
  console.log(`Server is running on [http://localhost:${PORT}](http://localhost:${PORT})`);
});
