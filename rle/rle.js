let fs= require("fs");
let arg = process.argv;

let mode = arg[2];
let input = arg[3];
let output = arg[4];

let inText=fs.readFileSync(input, "utf-8");
let outText="";
let n=1;

function codeFile (inText){
    for (let i=0; i<inText.length;i++){
        if ((inText.charAt(i)==inText.charAt(i+1)) && !(n==255)){
            n=n+1;
            }
        else{
            if ((n>=4) || (inText.charAt(i)=="#")){
                outText+='#'+String.fromCharCode(n)+inText.charAt(i);
            }
            else{
                outText+=inText.charAt(i).repeat(n)
            }
            n=1;
        };
    }
    fs.writeFileSync(output,outText);
}

function decodeFile (inText){
    let i = 0;
    while (i < inText.length) {
        if (inText.charAt(i)=='#'){
            outText+=inText.charAt(i+2).repeat(inText.charCodeAt(i+1));
            i += 3;
        }else{
            outText+=inText.charAt(i);
            i += 1;
        }
    }
    fs.writeFileSync(output,outText);
};

if (mode=="code"){
    codeFile(inText);
} else if (mode=="decode"){
    decodeFile(inText);
} else if (mode == "test") {
    outText = fs.readFileSync(output, "utf-8");
    if (inText == outText) {
        console.log(true);
    } else {
        console.log(false);
    }
}
