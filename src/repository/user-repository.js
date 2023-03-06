import CrudRepository from "./crud-repository.js";
import User from "../model/User.js";

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

    async findBy(data){
        try {
            const response = await User.findOne(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
export default UserRepository; 