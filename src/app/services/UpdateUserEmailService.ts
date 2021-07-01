import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    id: string;
    email: string;
}

class UpdateUserEmailService {
    async execute({ id, email }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);
                        
        const user_id = await usersRepository.findOne(id)

        if (!user_id)
            throw new Error("ID not found")        

        const user = await usersRepository.update(id, { email });
        
        return user;
    }
}

export { UpdateUserEmailService }