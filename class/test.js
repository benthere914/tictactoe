let testA = [[' ', ' ', ' '],
             [' ', ' ', ' '],
             [' ', ' ', ' ']]


let testB = [['X', 'X', 'X'],
             [' ', ' ', ' '],
             [' ', ' ', ' ']]

let testC = [[' ', 'X', ' '],
             [' ', 'X', ' '],
             [' ', 'X', ' ']]

let testD = [[' ', ' ', 'X'],
             [' ', 'X', ' '],
             ['X', ' ', ' ']]


let strA = testA.join()
let strB = testB.join()
let strC = testC.join()
let strD = testD.join()

console.log(strA)
console.log(strB)
console.log(strC)
console.log(strD)

let empty = ' , , , , , , , , ';
let top = 'X,X,X, , , , , , ';
 
if (empty === strA) {console.log('it works')}
if (top === strB) {console.log('it works') }


