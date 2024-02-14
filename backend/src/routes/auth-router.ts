import * as authController from "../controllers/auth-controller"
import { Router } from "express"

const router = Router()

router.post("/api/auth/signin", authController.registerUser)            //fatto
router.post("/api/auth/login", authController.loginUser)                //fatto
router.post("/api/auth/logout", authController.logoutUser)              //fatto
router.get("/api/auth/getUser", authController.getUser)                 //fatto
router.post("/api/auth/mod/password", authController.modifyPassword)    //fatto

export default router
