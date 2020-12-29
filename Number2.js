do{
    console.clear();
    let min = prompt("Введите минимальное число");
    let max = prompt("Введите максимальное число");
    if(!min || !max){
        alert("Остановленно.");
       break;
    }if(isNaN(min) || isNaN(max)){
        alert("Нужно вводить числа!");
    }
    else if(min > max){
        alert("Минимальное число не может быть больше максимального!");
    } else{
        randomInteger(min,max);
    }
} while(true);

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    alert(Math.round(rand));
  }