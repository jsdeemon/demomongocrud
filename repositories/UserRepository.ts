import db from '../db/mongo.ts' 
import { IUser } from '../types.ts'

// Defining schema interface
interface UserSchema {
    username: string;
    password: string;
  }

class UserRepository {
    readonly userCollection = db.collection<UserSchema>('users') 

    async find() {
        const users = await this.userCollection.find() 
        return users
    } 

    async insertOne(user: IUser) {
        const { $oid } = await this.userCollection.insertOne(user)
        return $oid  
    }

    async findOne(id: string) {
        const user = await this.userCollection.findOne({'_id': {"$oid": id}})
        return user 
    }
    async deleteOne(id: string) {
        await this.userCollection.deleteOne({'_id': {'$oid': id}})
    }

    async updateOne(id: string, updatedData: any) {
        await this.userCollection.updateOne(
            {'_id': {'$oid': id}},
            {$set: {...updatedData}}
        )
    }

}

export default UserRepository