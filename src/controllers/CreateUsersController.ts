import { Request, Response } from 'express'
import { CreateUsersService } from '../services/CreateUsersService'

export class CreateUsersController {
    async handle(request:Request, response: Response) {
        const {name, password} = request.body

        const service = new CreateUsersService()

        const result = await service.execute({name, password})

        if(!name) {
            return response.status(422).json({msg: 'O nome é obrigatório'})
        }

        if(!password) {
            return response.status(422).json({msg: 'A senha é obrigatória'})
        }

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}