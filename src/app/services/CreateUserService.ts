import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    picture_url: string;
}

class CreateUserService {
    async execute({ name, email, picture_url }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        const test_name = name.trim();
        const test_email = email.trim();
        const test_picture_url = picture_url.trim();

        if (!name || name === undefined || name === null || test_name === null)
            throw new Error("Name incorrect");
        
        if (!email || email === undefined || email === null || test_email === null)
            throw new Error("Email incorrect");
        
        if (!picture_url || picture_url === undefined || picture_url === null || test_picture_url === null)
            throw new Error("Picture_URL incorrect");
        
        const userAlreadExists = await usersRepository.findOne({ email });

        if (userAlreadExists)
            throw new Error("User already exists");
        
        const user = usersRepository.create({ name, email, picture_url });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }