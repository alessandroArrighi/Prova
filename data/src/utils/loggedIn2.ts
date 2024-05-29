import axios from 'axios'
import { Request, Response } from 'express';

export async function loggedIn(req: Request, res: Response) {
    const result = await axios.post("/", {
        cookies: req.cookies
    })
}