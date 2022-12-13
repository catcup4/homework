function getThis() {
    return this;  // указывает на локальный this
}
//функции - объекты первого класса

const obj1 = {name: "obj1"};
const obj2 = {name: "obj2"};

//obj1.getThis = getThis;
obj2.getThis = getThis;


console.log(obj1.getThis())

