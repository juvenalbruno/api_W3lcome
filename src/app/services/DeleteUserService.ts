import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    id: string;
}

class DeleteUserService {
    async execute({ id }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!id)
            throw new Error("ID incorrect")
        
        const idExists = await usersRepository.findOne(id);

        if (!idExists)
            throw new Error("ID not exists!")
        
        const deleteUser = await usersRepository.delete(idExists);

        return deleteUser;
    }
}

export { DeleteUserService }