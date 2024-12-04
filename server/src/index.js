import express from 'express'
//import { MongoClient } from 'mongodb';
import routes from './routes.js';
import cors from 'cors';
import mongoose from 'mongoose';
import { authMiddleware } from './middlewares/authMiddleware.js';

try {
    await mongoose.connect('mongodb://127.0.0.1:27017');
    console.log('DB Connected!');
    
} catch (err) {
    console.log('Cannot connect to DB!');
    
}

const app = express();

app.use(express.json());
//app.use(express.urlencoded({extended: false}))


/*
const uri = 'mongodb://localhost:27017';
const dbName = 'persons';

app.get('/data', async (req, res) => {
    try {
        
        const client = new MongoClient(uri, { useUnifiedTopology: true });
        await client.connect();

       
        const db = client.db(dbName);
        const collection = db.collection('people');
        const data = await collection.find({}).toArray();

        res.json(data); 
        client.close();
    } catch (error) {
        res.status(500).send('Error retrieving data from MongoDB: ' + error.message);
    }
});
*/

app.use(cors());
app.use(authMiddleware);
app.use(routes);

app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))