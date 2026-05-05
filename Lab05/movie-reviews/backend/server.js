import express from 'express';
import cors from 'cors';
import movies from './api/movies.router.js';

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/v1/movies', movies);
app.use('*', (req, res) => res.status(404).json({ error: 'Not found' }));

export default app;