import inquirer from "inquirer";
let systemGenertednum = Math.floor(Math.random() * 100);
const answer = await inquirer.prompt({
    type: "number",
    name: "UserInput",
    message: "Please enter your guess number"
});
const { UserInput } = answer;
if (UserInput === systemGenertednum) {
    console.log("Yeah!You are Correct \n You Win");
}
else {
    console.log("Better Luck next time");
}
console.log(systemGenertednum);
