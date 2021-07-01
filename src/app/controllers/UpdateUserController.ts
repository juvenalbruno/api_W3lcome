import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { email, picture_url } = req.body;
        
        const updateUserController = new UpdateUserService();

        try {
            await updateUserController.execute({ id, email, picture_url });
            return res.status(200).json("User updated successfully!");

        } catch (err) {
            return res.status(404).json("Unidentified ID").end();
        }
    }
}

export { UpdateUserController }