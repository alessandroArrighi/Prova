import { Request, Response } from "express"
import { connection } from "../utils/db"
import { loggedIn } from "../utils/loggedIn"

export async function appointmentsByID(req: Request, res: Response) {
    if(!await loggedIn(req, res)) {
        return
    }

    connection.execute(
        `SELECT * FROM Appuntamenti WHERE IDUtenete = ?`,
        [req.params.id],
        function(err, results, fields) {
            res.json(results)
        }
    )
}

export async function allStores(req: Request, res: Response) {
    if(!await loggedIn(req, res)) {
        return
    }

    connection.execute(
        `SELECT * FROM Negozi`,
        [],
        function(err, results, fields) {
            res.json(results)
        }
    )
}
