import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, picture_url } = req.body;

        const createUserService = new CreateUserService();
        
        try {
            const user = await createUserService.execute({ name, email, picture_url });

            return res.json(user);
        } catch (err) {
            return res.status(404).json("Error in parameters").end()
        }
    }
}

export { CreateUserController };