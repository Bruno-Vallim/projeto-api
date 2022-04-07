import { getRepository } from "typeorm"
import { Users } from "../entities/Users"


type UsersUpdateRequest = {
    id:string,
    name:string,
    password: string
}


export class UpdateUsersService {
    async execute({id, name, password}: UsersUpdateRequest) {

        const repo = getRepository(Users)

        const users = await repo.findOne({select:["id"]})

        if(!users){
            return new Error ("User does not exist!")
        }

        users.id = id;
        users.name = name ? name : users.name;
        users.password = password ? password : users.password;

        await repo.save(users)

        return users
    }
}