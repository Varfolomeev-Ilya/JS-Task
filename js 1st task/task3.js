
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