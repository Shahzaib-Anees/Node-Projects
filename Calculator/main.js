import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        type: "number",
        name: "numberone",
        message: "Please enter your First Number:"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "Please enter your Second Number:"
    },
    {
        type: "list",
        name: "Operator",
        message: "Please select an Operator:",
        choices: ["Addition", "Substraction", "Multiplication", "Division"]
    }
]);
if (answers.Operator === "Addition") {
    var result = answers.numberone + answers.numbertwo;
    console.log(result);
}
else if (answers.Operator === "Substraction") {
    var result = answers.numberone - answers.numbertwo;
}
else if (answers.Operator === "Multiplication") {
    var result = answers.numberone * answers.numbertwo;
    console.log(result);
}
else if (answers.Operator === "Division") {
    var result = answers.numberone / answers.numbertwo;
    console.log(result);
}
else {
    console.log("Please enter valid input");
}
