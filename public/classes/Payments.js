export class Payments {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return ` Client ${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}
