const fs = require("fs");
let stroka = fs.readFileSync(process.argv[2],'utf8')
let shab = fs.readFileSync(process.argv[3],'utf8')
let j, i;
let shab_hash = 0
let stroka_hash = 0;
let index = [];
if (shab.length > stroka.length){
    console.log("Шаблон больше, чем строка");
    
} else {
    console.time();
    for (i = 0; i < shab.length; i++){
        shab_hash += shab.charCodeAt(i) ** Math.pow(2, shab.length - i - 1);
        stroka_hash += stroka.charCodeAt(i) ** Math.pow(2, shab.length - i - 1);
    }
    for (i = 0; i < stroka.length - shab.length + 1; i++){
        if (shab_hash == stroka_hash){
            j = 0;
            while (stroka[i + j] == shab[j])
            {
                j++;
                if (j == shab.length){
                    index.push(i + 1);
                    break;  
                }
                    
                              
            }
        }
        stroka_hash = (stroka_hash - stroka.charCodeAt(i) * Math.pow(2, shab.length - 1) * 2 + stroka.charCodeAt(i + shab.length - 1));
    }
    

}
console.timeEnd();
console.log(index);