import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    id: string;
    picture_url: string;
}

class UpdateUserPictureService {
    async execute({ id, picture_url }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);
        
        const user_id = await usersRepository.findOne(id)

        if (!user_id)
            throw new Error("ID not found")

        const user = await usersRepository.update(id, { picture_url });

        return user;
    }
}

export { UpdateUserPictureService }