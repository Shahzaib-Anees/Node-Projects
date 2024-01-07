import inquirer from "inquirer";
interface Userans{
    UserID:string,
    UserPin:number,
    accounttype:string
    transactiontype:string,
    FastCash:number;
    Withdrawal:number,
}
let userans:Userans=await inquirer.prompt([{
    type:"string",
    name:"UserID",
    message:"Please enter your ID:",
},{
    type:"number",
    name:"UserPin",
    message:"Please enter your Account Pin:"
},{
    type:"list",
    name:"accounttype",
    choices:["Current Account","Saving Account"],
    message:"Please select your Account type:",
},{
    type:"list",
    name:"transactiontype",
    choices:["FastCash","Withdrawal"],
    message:"Please select Transaction Type:",
    when(userans){
        return userans.accounttype=="Current Account"
    }
},{
    type:"list",
    name:"FastCash",
    choices:["5000","10000","20000","30000","40000","50000"],
    message:"Please select the amount:",
    when(userans){
         return userans.transactiontype == "FastCash";
    },
},{
    type:"number",
    name:"Withdrawal",
    message:"Please enter the Amount:",
  when(userans){
    return userans.transactiontype=="Withdrawal"
  },
}
])

if(userans.UserID !== "Shahzaib"){
    console.log(`Please enter correct user ID`)
}else if(userans.UserPin !== 1234){
    console.log(`Incorrect pin`)
}else{};
// console.log(userans);
let UserBalance=Math.floor(Math.random()*1000000);
if(userans.transactiontype==="Withdrawal"){
    let withdrawalAmount=userans.Withdrawal;
    console.log(`Congratulations! Withdrawal of ${withdrawalAmount} has been successful
Your remaining account balance is ${UserBalance-withdrawalAmount} `);
}else if(userans.transactiontype==="FastCash"){
    let UserAmountInput=userans.FastCash;
    console.log(`Congratulations! Withdrawal of ${UserAmountInput} has been successful
Your remaining account balance is ${UserBalance-UserAmountInput}`)
}else{
    console.log(`Oops! Something went wrong.`)
}
   