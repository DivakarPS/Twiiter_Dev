// const express = require('express');
import express from 'express';
import {connect} from './config/database.js';
// const connect  = require('./config/database');
const app = express();

// const TweetRepository = require('./repository/tweet-repository');
// const TweetService  = require('./services/tweet-service');
// const Comment = require('./model/comment');
import service from './services/tweet-service.js';

app.listen(3000, async () => {
    console.log('Server Started');
    await connect();
    // const service = new TweetService();
    // tweetRepo.create({
    //     content : 'This is 1st tweet',
    //     userEmail: 'a@b.com'
    // })
    let ser = new service(); 
    await ser.create({
        content : 'Done with #refactor?',
        // userEmail: 'c@d.com'
    });
    // const t=await tweetRepo.getAll(1,3);
    // console.log(t);
})