import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    id: string;
    email: string;
    picture_url: string;
}

class UpdateUserService {
    async execute({ id, email, picture_url }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);
    
        const id_user = usersRepository.findOne(id);
                
        if (!id)
            throw new Error("ID not found")
        
        if (!email) {
            const user = await usersRepository.update(id, { picture_url });
    
            return user;
        }
        
        if (!picture_url) {
            const user = await usersRepository.update(id, { email });
    
            return user;
        }

        const user = await usersRepository.update(id, { email, picture_url });

        return user;
    }
}

export { UpdateUserService }