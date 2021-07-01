import { Request, Response } from "express";
import { UpdateUserEmailService } from "../services/UpdateUserEmailService";

class UpdateUserEmailController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { email } = req.body;
        
        const updateUserController = new UpdateUserEmailService();

        try {
            await updateUserController.execute({ id, email });
            return res.status(200).json("User updated successfully!");

        } catch (err) {
            return res.status(404).json("Unidentified ID").end();
        }
    }
}

export { UpdateUserEmailController }