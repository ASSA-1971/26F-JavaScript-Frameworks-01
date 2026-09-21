import express, { Request, Response } from 'express';

const app = express();
const PORT = 4000;

app.get('/me', (req: Request, res: Response) => {
  res.send('My name is aarif, I’m student in Canada Georgian College. I like cars and food');
});

app.get('/dad', (req: Request, res: Response) => {
  res.send('My dad name is Salem is a retired, he likes the to travel');
});

app.get('/bro', (req: Request, res: Response) => {
  res.send('My brother name is awed he is an officer his is smart he like the mathematics');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});