import { Router } from "express";
import { authRouter } from "./auth.route";

const apiRoute = Router();

apiRoute.use("/auth", authRouter);
export default apiRoute;
export { default as errorHandler } from "./error-handler.route";
export { default as handleRoute } from "./handle-route.route";
