import mongoose from "mongoose";

class CrudRepository {
    constructor(model){
        this.model=model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log('something went wrong in crud repo');
            console.log(error);
        }
    }

    async destroy(id){
        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log('something went wrong in crud repo');
            console.log(error);
        }
    }

    async get(id){
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            console.log('something went wrong in crud repo');
            console.log(error);
        }
    }
    async getAll(){
        try {
            const response = await this.model.find({});
            return response;
        } catch (error) {
            console.log('something went wrong in crud repo');
            console.log(error);
        }
    }

    async upadate(id,data){
        try {
            const result = await this.model.findByIdAndUpdate(id,data,{new:true});
            return result;
        } catch (error) {
            console.log('something went wrong in crud repo');
            console.log(error);
        }
    }
}

export default CrudRepository;