import Like from '../model/like.js';
import CrudRepository from './crud-repository.js';

class LikeRepository extends  CrudRepository{
    constructor(){
        super(Like);
    }

    async findByUserAndLikable(data){
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log('something went wrong in Like repository');
            throw error;
        }
    }
}

export default LikeRepository;