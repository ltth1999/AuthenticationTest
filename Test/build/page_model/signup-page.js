"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var testcafe_1 = require("testcafe");
var SignUpPage = /** @class */ (function () {
    function SignUpPage() {
        this.firstName = testcafe_1.Selector('#FreshdeskUser_first_name');
        this.lastName = testcafe_1.Selector('#FreshdeskUser_last_name');
        this.emailInput = testcafe_1.Selector('#FreshdeskUser_email_SG');
        this.pass = testcafe_1.Selector('#FreshdeskUser_new_password');
        this.rePass = testcafe_1.Selector('#FreshdeskUser_new_password_repeat');
        this.showPass = testcafe_1.Selector('.btn-show-password');
        this.title = testcafe_1.Selector('#FreshdeskUser_title');
        this.company = testcafe_1.Selector('#FreshdeskUser_company');
        this.countrySeclect = testcafe_1.Selector('#country.form-control');
        this.countryState = testcafe_1.Selector('#state.form-control');
        this.phoneInput = testcafe_1.Selector('#FreshdeskUser_phone');
        this.submitSignUpBtn = testcafe_1.Selector('#signup-btn');
    }
    SignUpPage.prototype.inputName = function (inputAccount) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, testcafe_1.t
                            .click(this.firstName)
                            .typeText(this.firstName, (_a = inputAccount.firstName) !== null && _a !== void 0 ? _a : "John")
                            .click(this.lastName)
                            .typeText(this.lastName, (_b = inputAccount.lastName) !== null && _b !== void 0 ? _b : "Smith")
                            .click(this.emailInput)
                            .typeText(this.emailInput, inputAccount.email)
                            .click(this.pass)
                            .typeText(this.pass, inputAccount.pass)
                            .click(this.showPass)
                            .click(this.rePass)
                            .typeText(this.rePass, (_c = inputAccount.rePass) !== null && _c !== void 0 ? _c : "Abc@1234")
                            .click(this.showPass)
                            .click(this.submitSignUpBtn)];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignUpPage.prototype.createAccount = function (inputAccountStep) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, testcafe_1.t
                            .click(this.title)
                            .typeText(this.title, inputAccountStep.title)
                            .click(this.company)
                            .typeText(this.company, inputAccountStep.company)
                            .click(this.countrySeclect)
                            .click(this.countrySeclect.find('option').withText(inputAccountStep.countrySeclect))
                            .click(this.countryState)
                            .click(this.countryState.find('option').withText(inputAccountStep.countryState))
                            .click(this.phoneInput)
                            .typeText(this.phoneInput, inputAccountStep.phone)
                            .click(this.submitSignUpBtn)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SignUpPage;
}());
exports.default = new SignUpPage();
