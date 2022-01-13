export class Payments {
    constructor(receipant, details, amount) {
        this.receipant = receipant;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.receipant} owed ${this.amount} for${this.details} `;
    }
}
