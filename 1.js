
do{
    console.clear();
    let num1 = prompt("Введите 1-е число");
    let num2 = prompt("Введите 2-е число");
    if(!num1 || !num2){
        alert("Остановленно.");
       break;
    }
    if(isNaN(num1) || isNaN(num2)){
        alert("Нужно вводить числа!");
    } else{
        numbersBetween(num1,num2);
    }
   
} while(true);

function numbersBetween(num1,num2){
    if(num1 > num2){
        num1 = [num2, num2 = num1][0];
    }
    num1 = Math.floor(num1);
    num2 = Math.floor(num2);
    if(num1 == num2){
        alert("Между нимим нет целых чисел");
        return null;
    } else{
        while(num1++ < num2-1){
            console.log(num1);
        }
    }
    alert("Выведено.");
}
