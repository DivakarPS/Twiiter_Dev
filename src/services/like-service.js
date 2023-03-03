import { LikeRepository, TweetRepository }  from '../repository/index.js';


class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository(); 
    }

    async toggleike(modelId, modelName, userId){
        if(modelName == 'Tweet'){
            var likable = await this.tweetRepository.find(modelId);
        } else if(modelName == 'Comment'){
            //TODO
        }else{
            throw new Error('Unknown Model Type');
        }
        const exists = await this.likeRepository.findByUserAndLikable({
            user: userId,
            onModel: modelName,
            likable: modelId
        });
        if(exists){
            likable.likes.pull(exists.id);
            await likable.save();
            await exists.remove();
            var isAdded = false;
        }else{
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelName,
                likeable: modelId
            });
            likable.likes.push(newLike);
            await likable.save();
            var isAdded = true;
        }
        return isAdded;
    }
}

export default LikeService;
