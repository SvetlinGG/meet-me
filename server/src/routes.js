import { Router } from "express";

import userController from "./controllers/userController.js";
import personController from "./controllers/personController.js";

const routes = Router();

routes.use('/users', userController);
routes.use('/data/catalog', personController)


export default routes;