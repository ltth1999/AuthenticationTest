export class Account {
    firstName: string;
    lastName: string;
    emailInput: string;
    pass: string;
    rePass: string;
    constructor( email: string, pass: string, firstName?: string, lastName?: string,  rePass?: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.emailInput = email;
            this.pass = pass;
            this.rePass = rePass;
    }
}

export class NextStepAccount {
    title: string;
    company: string;
    countrySeclect: string;
    countryState: string;
    phone: string;
    constructor(title: string, company: string, countrySeclect: string, countryState: string, phone: string) {
        this.title = title;
        this.company = company;
        this.countrySeclect = countrySeclect;
        this.countryState = countryState;
        this.phone = phone;
    }
}


