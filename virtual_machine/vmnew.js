const fs = require('fs');                       //библиотеки
const { exit } = require('process');
const readline = require('readline-sync');

let mem = new Array();    //создаем массив

let progname = process.argv[2]; //в progname пишем ту прогу, кот хотим выполнить(add,jmp)

let row_text = fs.readFileSync(filename).toString();
let skip = false;
row_text.split('\n').forEach((str) => {
    str.split(' ').forEach((item) => {
        if (item.includes('//') || skip==true){
            skip = true;
            return;
        }
        if (isNaN(item)){
            mem.push(item.replace('\r', '')) 
        } else {mem.push(parseInt(item));}

    })
    skip = false;
})
let ip = 0;
/*for (i = mem.length;i<700; i++){
    mem.push('');
}*/
while (mem[ip] != 'exit'){
    switch(mem[ip]){
        case 'input':                        //ввести значение
            mem[(mem[ip+1])] = (mem[ip+2]);
            ip+=3;
            break;
        case 'output':                      //вывести значение
            console.log(mem[(mem[ip+1])]);
            ip+=2;
            break;
        case 'add':                          //сумма
            mem[(mem[ip+3])] = (mem[(mem[ip+1])]) + (mem[(mem[ip+2])]);
            ip+=4;
            break;
        case 'sub':                          //разность
            mem[(mem[ip+3])] = (mem[(mem[ip+1])]) - (mem[(mem[ip+2])]);
            ip+=4;
            break;
        case 'div':                            //деление
            mem[(mem[ip+3])] = Math.floor((mem[(mem[ip+1])]) / (mem[(mem[ip+2])]));
            ip+=4;
            break;  

        case 'mul':                             // умножение
            mem[(mem[ip+3])] = (mem[(mem[ip+1])]) * (mem[(mem[ip+2])]);
            ip+=4;
            break;
        
        case 'mod':                              //остаток от деления
            mem[(mem[ip+3])] = (mem[(mem[ip+1])]) % (mem[(mem[ip+2])]);
            ip+=4;
            break;
        case 'point':
            mem[mem[ip+1]] = ip+2;
            while (mem[ip] != 'endpoint'){ 
                ip += 1; }
            break;

        case 'endpoint': 
                ip += 1;
                break;

        case 'goto':
                ip = (mem[mem[ip+1]]);
                break;

        case 'jb>':                               //больше
            if ((mem[(mem[ip+1])]) > (mem[(mem[ip+2])])){
                ip = (mem[(mem[ip+3])]);
            } else { ip+=4; }
            break;

        case 'jl<':                                  //меньше
            if ((mem[(mem[ip+1])]) < (mem[(mem[ip+2])])){
                ip = (mem[(mem[ip+3])]);
            } else { ip+=4; }
            break;

        case 'jr=':                                     //равно
            if ((mem[(mem[ip+1])]) == (mem[(mem[ip+2])])){
                ip = (mem[(mem[ip+3])]);
            } else { ip+=4; }
            break;

        case 'jmp':                             //прыжок
            ip = mem[mem[ip + 1]]
            break;
        
        case NaN:
            ip += 1;
            break;

        default:
            console.log('произошла ошибка, либо отсуствует exit.', ip, mem[ip])
            mem[ip] = 'exit';
            break;
    }
}