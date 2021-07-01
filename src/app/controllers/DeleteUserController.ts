import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const deleteUserService = new DeleteUserService();

        try {
            const deleteUser = await deleteUserService.execute({ id });

            return res.status(200).json("User deleted successfully!");

        } catch (err) {
            return res.status(404).json("Unidentified ID").end();
        }

    }
}

export { DeleteUserController }