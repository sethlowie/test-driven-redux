"use strict";
exports.__esModule = true;
var store_1 = require("store");
var selectors_1 = require("./selectors");
var actions_1 = require("./actions");
var getStore = function () { return Promise.resolve(store_1.makeStore()); };
describe("session", function () {
    it("should start with no session", function () {
        var store = store_1.makeStore();
        var session = selectors_1.sessionSelector(store.getState());
        expect(session).toBeNull();
    });
    it("should set the session on successful login", function () {
        return getStore().then(function (_a) {
            var getState = _a.getState, dispatch = _a.dispatch;
            var session = selectors_1.sessionSelector(getState());
            expect(session).toBeNull();
            var req = function () { return Promise.resolve({ jwt: "token" }); };
            return actions_1.login("admin@waffles.co", "i_like_waffles")(dispatch, getState, {
                req: req
            }).then(function () {
                session = selectors_1.sessionSelector(getState());
                expect(session).not.toBeNull();
            });
        });
    });
});
