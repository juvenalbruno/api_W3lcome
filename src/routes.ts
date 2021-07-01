import { Router } from "express";
import { CreateUserController } from "./app/controllers/CreateUserController";
import { DeleteUserController } from "./app/controllers/DeleteUserController";
import { ListUsersController } from "./app/controllers/ListUsersController";
import { UpdateUserEmailController } from "./app/controllers/UpdateUserEmailController";
import { UpdateUserPictureController } from "./app/controllers/UpdateUserPictureController";

const createUserController = new CreateUserController();
const listUserController = new ListUsersController();
const updateUserEmailController = new UpdateUserEmailController();
const updateUserPictureController = new UpdateUserPictureController();
const deleteUserController = new DeleteUserController();

const router = Router();

router
    .post("/user", createUserController.handle)
    .get("/user", listUserController.handle)
    .put("/user/email/:id", updateUserEmailController.handle)
    .put("/user/picture/:id", updateUserPictureController.handle)
    .delete("/user/:id", deleteUserController.handle);

export { router };