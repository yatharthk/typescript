//Introducing class 
export class Invoice {
    // readonly client:string;
    // details:string;
    // amount:number;
    // constructor(c:string,d:string,a:number){
    //     this.amount=a;
    //     this.details=d;
    //     this.client=c;
    // }
    //2nd way to initialize values only works with access modifiers otherwise we get errors
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return ` Client ${this.client} owes ${this.amount} for ${this.details}`;
    }
}
