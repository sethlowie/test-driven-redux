"use strict";
exports.__esModule = true;
exports.sessionReducer = void 0;
var types_1 = require("./types");
exports.sessionReducer = function (state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case types_1.SET_SESSION:
            return action.payload;
        default:
            return state;
    }
};
