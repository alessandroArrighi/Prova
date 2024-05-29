import express, { Express } from 'express'
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import framesRouter from "./routes/products-router"
import ordersRouter from "./routes/orders-router"
import usersRouter from "./routes/users-router"
import history from "connect-history-api-fallback"

const app: Express = express()
const port: String | undefined = process.env.PORT

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Consentire l'accesso da qualsiasi dominio (da migliorare in base alle tue esigenze di sicurezza)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Consentire i metodi HTTP specificati
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Consentire gli header specificati
    next();
});

//app.use(history())
app.use(bodyParser.json())
app.use(cookieParser())

app.get("/", function(req, res) {
    res.json({"url": process.env.DB_URL})
})

app.use(framesRouter)
app.use(ordersRouter)
app.use(usersRouter)

//app.use(express.static("dist-frontend"))

app.use(function(req, res, next) {
    res.setHeader("Content-Type", "text/plain")
    res.status(404).send("404 PAGE NOT FOUND...")
})

app.listen(port, function() {
    console.log("Listening on http://localhost:" + port)
})
