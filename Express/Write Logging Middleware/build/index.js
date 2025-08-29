"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000;
var loggingMiddleware = function (req, res, next) {
    var url = req.url;
    console.log(url);
    next();
};
app.get('/countries', loggingMiddleware, function (req, res) {
    res.send('countries endpoint');
});
app.get('/teams', loggingMiddleware, function (req, res) {
    res.send('teams endpoint');
});
app.get('/actors', function (req, res) {
    res.send('actors endpoint');
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
