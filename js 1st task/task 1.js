/*задача числа фибоначи
Последовательность чисел Фибоначчи выполняется формулой Fn = Fn-1 + Fn-2*/



/*function fibonacci(n) {
  if (n <= 1) return n;
      return n=fibonacci(n-1)+fibonacci(n-2);
  
}

console.log(fibonacci(8))*/

/*2) Функция.Принимает массив строк.
Должна вернуть массив результатов сравнения двух строк */


// let strings=['asd','afffd','cc','kk'];

// function comparison (strings) {
//   let result =[];
//   for (let i = 0; i < strings.length-1; i++){
//     let first = strings[i];
//     let second = strings[i+1];
//     let lengthFirst = first.length;
//     let lengthSecond = second.length;
//     if(first[0] === second[0]){
//       if(first[lengthFirst] === second[lengthSecond])
//       {
//         result.push(true);
//       }
//     }
//     result.push(false);
//   }
  
//   return console.log( result);
// }

// comparison(strings);

//3.Написать функцию, которая принимает целочисленный number и рисует спиральную матрицу NxN, где N - входной параметр.

function matrix(n) {
  let result = [];
  for(let rows=0; rows < n; rows++){
    let curArr = [];
    for (let column=0; column < n; column++){
      let x = +prompt('Введите число', 5)
      curArr.push(x);
    }
    result.push(curArr);
    result.push(',');
  }
    
  alert(result);
}


let n = +prompt('Введите размер матрицы',3);

matrix(n);