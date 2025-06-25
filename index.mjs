import connecttodb from "./db/mongodb.mjs";
import { app, connectServer } from "./server.mjs";
import userRoutes from './routes/userRoutes.mjs';

app.get('/', (req, res) => {
    res.send('Hello World!');
});
connecttodb();
app.use('/api/users', userRoutes); // Use user routes
connectServer();