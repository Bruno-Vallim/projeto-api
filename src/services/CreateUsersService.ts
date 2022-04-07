import { getRepository } from "typeorm";
import { Users } from "../entities/Users";

type UsersRequest = {
    name:string;
    password:string,
};

export class CreateUsersService {
    async execute({name, password}:UsersRequest): Promise<Users | Error>{
        const repo = getRepository(Users);

        // if(await repo.findOne({select:["name"]})){
        //     return new Error("Users already exists");
        // }

        const users = repo.create({
            name,
            password,
        });

        await repo.save(users)

        return users
    }
}