const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let result = []

  for (let i = 1; i <= 10; i++){
    result.push(addNums(i*increment));
  }
  return result;
}
/*
  1 = 1
  2 = (2+1) + (1) = 4
  3 = (3+2+1) + 4 =10


*/


// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let result = []

  // let sum = 0
  // for (let i = 1; i <= 10; i++){
  //   sum = addNums(i)
  //   let sum2 = addNums(i-1);
  //   result.push(sum + sum2)
  // }

  //sum = 0;
  for (let i =increment; i<=  increment*10; i+= increment){
    result.push(addManyNums(i))
  }
  return result;

  //   // for (let j = 1; j <= i; j++){
  //   //   sum += addNum(j*increment)
  //   // }
  //   let sum2 = 0;
  //   sum2 += addNums(i);

  //   sum += sum2
  //   result.push(addNums(sum))

  // }
  // for (let i = 0; i <result.length -1; i++){}
  ///return result;

}

module.exports = [addNums10, addManyNums10];
