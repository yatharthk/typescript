import { Invoice } from './classes/Invoice.js';
import { Payments } from './classes/Payments.js';
import { ListTemplate } from './classes/ListTemplate.js';
// //interface
// interface IsPerson{
//     name:string;
//     age:number;
//     speak(a:string):void;
//     spend(a:string):number;
// }
// let docOne:HasFormatter;
// let docTwo:HasFormatter;
// const form=document.querySelectorAll('form');
// const form=<HTMLFormElement>document.querySelector('.new-item-form')!; WAY1 
const form = document.querySelector('.new-item-form'); //WAY2 
// console.log(form.children);
//typeField
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
var invOne = new Invoice('mario', "work on mario Website", 250);
var invTwo = new Invoice('luigi', "work on Luigi website", 300);
//Creating the invoice list
var invoiceList = [];
invoiceList.push(invOne);
invoiceList.push(invTwo);
// invoiceList.forEach(invoice=>{
//     console.log(invoice.client,
//         // invoice.details, this dont work as the details are private
//         invoice.amount,invoice.format());
// });
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        // doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber); //values are being repeated here 
        //instead we can use tuple 
        // we can not use array as the array elements when spread can alter the position
        // of string or numbers and mismatch can happen
        doc = new Invoice(...values); //... is a spread operator and it opens whatever the list has.
    }
    else {
        // doc=new Payments(tofrom.value,details.value,amount.valueAsNumber);
        doc = new Payments(...values);
    }
    //lIST TEMPLATE INSTANCE
    const ul = document.querySelector('ul');
    const list = new ListTemplate(ul);
    list.render(doc, type.value, 'end');
    console.log(doc);
});
