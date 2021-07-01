import { Router } from "express";
import { CreateUserController } from "./app/controllers/CreateUserController";
import { DeleteUserController } from "./app/controllers/DeleteUserController";
import { ListUsersController } from "./app/controllers/ListUsersController";
import { UpdateUserController } from "./app/controllers/UpdateUserController";

const createUserController = new CreateUserController();
const listUserController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const router = Router();

router
    .post("/user", createUserController.handle)
    .get("/user", listUserController.handle)
    .put("/user/:id", updateUserController.handle)
    .delete("/user/:id", deleteUserController.handle);

export { router };