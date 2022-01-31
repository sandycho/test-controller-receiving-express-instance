import { Express } from 'express'

function routes(app: Express) {
    app.get("/", (req: any, res: any) => {
        return res.send("OK")
    })
}

export default routes