import express from 'express';
import {connect} from './config/database.js';
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';
import passport from 'passport';
import { toggleLike } from './controller/like-controller.js';
import { passportAuth } from './config/jwt-middleware.js';
import {UserRepository,  TweetRepository} from './repository/index.js';
import LikeService from './services/like-service.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());
passportAuth(passport);


app.use('/api',apiRoutes);


app.listen(3000, async () => {
    console.log('Server Started');
    await connect();
})