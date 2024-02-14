import { Router } from "express"
import * as productsController from "../controllers/products-controller"

const router: Router = Router()

router.get("/api/prodotti/vista", productsController.allFramesGrad)                 //fatto
router.get("/api/prodotti/sole", productsController.allFramesSun)
router.get("/api/prodotti/lac", productsController.allLac)                          //fatto
router.get("/api/prodotti/lenti", productsController.allLenses)
router.get("/api/prodotti/vista/:id", productsController.getFrameFromID)
router.get("/api/prodotti/lac/:id", productsController.getLacFromID)
router.get("/api/prodotti/lenti/:id", productsController.getLensesFromID)
router.post("/api/prodotti/aggiungi/montature", productsController.addNewFrame)     //fatto
router.post("/api/prodotti/aggiungi/lenti", productsController.addNewLens)
router.post("/api/prodotti/aggiungi/lac", productsController.addNewLAC)             //fatto
router.post("/api/prodotti/modifica/montature", productsController.modifyFrame)     //fatto
router.post("/api/prodotti/modifica/lenti", productsController.modifyLens)
router.post("/api/prodotti/modifica/lac", productsController.modifyLAC)             //fatto
router.post("/api/prodotti/elimina", productsController.deleteProduct)              //fatto

export default router