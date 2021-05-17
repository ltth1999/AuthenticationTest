"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextStepAccount = exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(email, pass, firstName, lastName, rePass) {
        if (firstName && lastName && rePass) {
            this.email = email;
            this.pass = pass;
        }
        else {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.pass = pass;
            this.rePass = rePass;
        }
    }
    return Account;
}());
exports.Account = Account;
var NextStepAccount = /** @class */ (function () {
    function NextStepAccount(title, company, countrySeclect, countryState, phone) {
        this.title = title;
        this.company = company;
        this.countrySeclect = countrySeclect;
        this.countryState = countryState;
        this.phone = phone;
    }
    return NextStepAccount;
}());
exports.NextStepAccount = NextStepAccount;
