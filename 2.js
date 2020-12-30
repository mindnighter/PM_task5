let exponentiation = (num,pow) =>{
    let result = 1;
    for(let i = 0; i < pow; i++){
        result *= num;
    }
    alert(result);
}

do{
    let num1 = prompt("Введите число");
    if(!num1){
        alert("Остановленно.");
       break;
    }
    let num2 = prompt("Введите степень (натуральное число)",2);
    if(isNaN(num1) || isNaN(num2)){
        alert("Нужно вводить числа!");
    } else if(Number.isInteger(+num2) && num2 >= 0){
        exponentiation(num1,num2);
    } else{
        alert("Введите степень натуральным числом!");
    }
   
} while(true);

function exponentiationFunctionExpression(num,pow){
    let result = 1;
    for(let i = 0; i < pow; i++){
        result *= num;
    }
    alert(result);
}