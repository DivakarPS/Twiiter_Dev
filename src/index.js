import express from 'express';
import {connect} from './config/database.js';
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';
// import service from './services/tweet-service.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);


app.listen(3000, async () => {
    console.log('Server Started');
    await connect();
    
    // let ser = new service(); 
    // await ser.create({
    //     content : 'my other #CoDe #works or #NOT ?'
    // });
    
})