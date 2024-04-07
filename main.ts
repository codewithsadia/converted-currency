#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.blue.bold("\n\t Welcome to `codewithsadia` - currency convertor\n\t")
);

//Define the list of currencies and their exchange rates
let exchange_rate: any = {
  USD: 1, // Base currency
  EUR: 0.9, // European currency(Euro)
  JYP: 113, // japenese currency (Yen)
  CAD: 1.3, // Canadine Dollar
  AUD: 1.65, // Australian Dollar
  PKR: 277.7, //Pakistani Rupees
  // Add more currencies and their exchange rates here
};
//Promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
  {
    name: "from_currency",
    type: "list",
    message: "select the currency to convert from:",
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
  },
  {
    name: "to_currency",
    type: "list",
    message: "select the currency to convert into",
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
  },
  {
    name: "amount",
    type: "input",
    message: "Enter the amount to convert:",
  },
]);

//Perform from cunversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;

//Formula of conversion
let base_amount = amount / from_amount;
let convert_amount = base_amount * to_amount;

//Display the converted amount
console.log(`converted Amount = ${chalk.green(convert_amount.toFixed(2))}`);
