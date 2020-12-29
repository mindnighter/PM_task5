do{
    console.clear();
    let num1 = prompt("Введите 1-е число с плавающей точкой");
    let num2 = prompt("Введите 2-е число с плавающей точкой");
    if(!num1 || !num2){
        alert("Остановленно.");
       break;
    }if(isNaN(num1) || isNaN(num2)){
        alert("Нужно вводить числа!");
    }
    else if(Number.isInteger(+num1) || Number.isInteger(+num2)){
        alert("Введите числа с плавающей точкой!");
    } else{
        foo(num1,num2);
    }
   
} while(true);

function foo(num1,num2){
    console.log(Math.round(num1 * 0.3));
    console.log(Math.round(num2 * 0.3));
    alert("Выведено.");
}