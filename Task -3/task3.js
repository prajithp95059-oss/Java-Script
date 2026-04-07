let username=prompt("Enter your name:");
let userage=prompt("Enter your age:");
userage=Number(userage);
let monthlysalary=prompt("Enter your Monthly Salary:");
monthlysalary=Number(monthlysalary);
console.log("UserName :"+username);
console.log("UserAge :"+userage);
console.log("MonthlySalary :"+monthlysalary);
if (userage >= 21 && userage <= 60 && monthlysalary >= 25000) {
    console.log("Eligible for Loan");
} else {
    console.log("Not Eligible for Loan ");
}

let loan=prompt("Enter the loan amount:");
let EMI=loan/12
loan=Number(loan);
console.log("Monthly EMI :"+EMI);

if(loan>500000){
    console.log("Loan Category :"+"High Loan");
}else if(loan>200000){
    console.log("Loan Category :"+"Medium Loan");
}else{
    console.log("Loan Category :"+"Low Loan");
}
if(monthlysalary>50000){
    console.log("Risk Level :"+"Low Risk");
}else{
    console.log("Risk Level :"+"High Risk");
}
switch(true){
    case(EMI>40000):
    console.log("Customer Type: Premium Customer");
    break;
    case(EMI>20000):
    console.log("Customer Type: Standard Customer");
    break;
    default:
        console.log("Customer Type: Basic Customer");
}
