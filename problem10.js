
const mySymbol = Symbol('mySymbol');

const obj = {
    [mySymbol]: 'nothing'
};


console.log(obj[mySymbol]); 
