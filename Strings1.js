do{
    console.clear();
    let str = prompt("Введите текст","foo foofoo barfoo bar foo");
    let reg = prompt("Введите что найти","foo");
    if(!str || !reg){
        alert("Остановленно.");
       break;
    }
    reg = new RegExp(reg, "g");
    findIndexes(reg,str);
} while(true);

function findIndexes(reg,str){
    let result;
    let indexes = [];
    do {
        result = reg.exec(str);
        if (result) indexes.push(result.index);
    } while (result);
    console.log(indexes);
    alert(`Количество совпадений: ${indexes.length}`);
}