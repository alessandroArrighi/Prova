import * as authController from "../controllers/auth-controller"
import { Router } from "express"

const router = Router()

router.post("/api/auth/signin", authController.registerUser)
router.post("/api/auth/login", authController.loginUser)
router.post("/api/auth/logout", authController.logoutUser)
router.get("/api/auth/getUser", authController.getUser)
router.post("/api/auth/mod/password", authController.modifyPassword)

export default router
