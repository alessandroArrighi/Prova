import { Router } from "express"
import * as appointmentsController from "../controllers/appointments-controller"

const router: Router = Router()

router.get("/api/appuntamenti/:id", appointmentsController.appointmentsByID)
router.get("/api/negozi", appointmentsController.allStores)

export default router