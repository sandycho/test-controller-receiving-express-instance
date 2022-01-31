"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function routes(app) {
    app.get("/", (req, res) => {
        return res.send("OK");
    });
}
exports.default = routes;
