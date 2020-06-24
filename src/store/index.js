"use strict";
exports.__esModule = true;
exports.makeStore = void 0;
var redux_1 = require("redux");
var session_1 = require("session");
exports.makeStore = function () {
    return redux_1.createStore(redux_1.combineReducers({
        session: session_1["default"]
    }));
};
