import UserRepository from "../repositories/UserRepository.ts"; 
import { IUser } from "../types.ts";

class UserService {
    readonly userRepository = new UserRepository() 

    getUsers = async () => {
        return await this.userRepository.find()
    }

    createUser = async (user: IUser) => {
        return await this.userRepository.insertOne(user)
    } 

    getUser = async (id: string) => {
        return await this.userRepository.findOne(id)
    }

    deleteUser = async (id: string) => {
        return await this.userRepository.deleteOne(id)
    }

    updateUser = async (id: string, updateData: any) => {
        return await this.userRepository.updateOne(id, updateData)
    }

} 

export default UserService