const express = require('express');
const connect  = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository')
const Comment = require('./model/comment');

app.listen(3000, async () => {
    console.log('Server Started');
    await connect();
    const tweetRepo = new TweetRepository();
    // tweetRepo.create({
    //     content : 'This is 1st tweet',
    //     userEmail: 'a@b.com'
    // })
    // tweetRepo.create({
    //     content : 'This is 2ndtweet',
    //     userEmail: 'c@d.com'
    // })
    const t=await tweetRepo.getAll(1,3);
    console.log(t);
})