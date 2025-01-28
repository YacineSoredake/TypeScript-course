"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./router/todos"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', todos_1.default);
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});
// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
