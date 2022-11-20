"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT_LISTEN_PING = 6969;
app.get('/ping', (req, res) => {
    res.json(req.headers);
});
app.get('*', (req, res) => {
    res.status(404).end();
});
app.listen(PORT_LISTEN_PING, () => {
    return console.log(`Express is listening at http://localhost:${PORT_LISTEN_PING}`);
});
//# sourceMappingURL=app.js.map