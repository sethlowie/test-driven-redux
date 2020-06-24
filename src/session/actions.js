"use strict";
exports.__esModule = true;
exports.login = exports.setSession = void 0;
var types_1 = require("./types");
// SET SESSION
exports.setSession = function (session) { return ({
    type: types_1.SET_SESSION,
    payload: session
}); };
// LOGIN
var loginEndpoint = function (email, password) { return ({
    url: "/session",
    body: {
        email: email,
        password: password
    }
}); };
var loginError = function (dispatch) { return function (err) {
    dispatch({
        type: "NOTIFY",
        payload: err
    });
}; };
var loginSuccess = function (dispatch) { return function (session) {
    dispatch(exports.setSession(session));
}; };
exports.login = function (email, password) { return function (dispatch, _, _a) {
    var req = _a.req;
    return req(loginEndpoint(email, password))
        .then(loginSuccess(dispatch))["catch"](loginError(dispatch));
}; };
