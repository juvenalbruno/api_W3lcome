import { Request, Response } from "express";
import { UpdateUserPictureService } from "../services/UpdateUserPictureService";

class UpdateUserPictureController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { picture_url } = req.body;
        
        const updateUserController = new UpdateUserPictureService();

        try {
            await updateUserController.execute({ id, picture_url});
            return res.status(200).json("User updated successfully!");

        } catch (err) {
            return res.status(404).json("Unidentified ID").end();
        }
    }
}

export { UpdateUserPictureController }