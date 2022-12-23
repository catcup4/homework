const fs = require("fs")

let sample = fs.readFileSync(process.argv[2], 'utf8')
let text = fs.readFileSync(process.argv[3], 'utf8')

let index = []
let i, j;

if (sample.length > text.length) {
    console.log("length of sample bigger length of text");
}
else {
    console.time();
    i=0;
    while (i < text.length - sample.length +1 ) {
        j = 0;
        while (text[i+j] == sample[j]) {
            j++;
            if ( j == sample.length) {
                index.push(i+1);
                break;
            }
            
        }
        i++;

    }
    console.timeEnd();
    console.log(index);
}