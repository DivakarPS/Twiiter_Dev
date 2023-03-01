import express from 'express';
import {connect} from './config/database.js';
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';
// import service from './services/tweet-service.js';

import {UserRepository,  TweetRepository} from './repository/index.js';
import LikeService from './services/like-service.js';

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
     const userRepo = new UserRepository();
    // repo.create({
    //     email: 'ds@admin.com',
    //     password : '123456',
    //     name: 'Divakar'
    // });
    const tweetRepo = new TweetRepository();
    const tweets = await tweetRepo.getAll(0,10);
    const users = await userRepo.getAll();
    // console.log(tweets , users);
    const likeService = new LikeService();
    await likeService.toggleike(tweets[0].id, 'Tweet', users[0].id);

})