const fs = require("fs");
let stroka = fs.readFileSync(process.argv[2], 'utf-8');
let shab = fs.readFileSync(process.argv[3], 'utf-8');

let i, j, k;
let shab_hash = 0;
let stroka_hash = 0;
let pos = []; //position

console.time();
for (i=0;i<shab.length; i++)
    shab_hash += shab.charCodeAt(i)**2;

i = 0;
while (i <= stroka.length - shab.length){
    if (i == 0){
        for(k = i; k < shab.length; k++)
            stroka_hash += stroka.charCodeAt(k)**2;
    } 
    else {
    k = i + shab.length - 1;
    stroka_hash = stroka_hash + stroka.charCodeAt(k)**2 - stroka.charCodeAt(i - 1)**2;
    }
//rfabcfrabc
//abc
    if (shab_hash == stroka_hash){
        j = 0;
        while (stroka[i + j] == shab[j])
        {
            j++;
            if (j == shab.length){
                pos.push(i + 1);
                break;  
            }
                
                            
        }
    }
    i++;        
}
console.timeEnd();
console.log(pos);

