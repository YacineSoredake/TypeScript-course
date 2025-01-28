import express, { Request, Response, NextFunction } from 'express';
import todosRouter from './router/todos';

const app = express();

app.use(express.json());
app.use('/', todosRouter);
app.use((error:Error,req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message:error.message});
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
