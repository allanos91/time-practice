const [addNums, addManyNums] = require("./phase-1");

// function addNums10Timing(increment) {
//   // Copy your `addNums10` code here
//   // Then, add timing code

//   let result = []

//   console.time("addNums10")
//   let start = Date.now()
//   for (let i = 1; i <= 10; i++){ //O(1)
//     result.push(addNums(i*increment)); //O(n)
//   }
//   console.timeEnd("addNums10")
//   let end = Date.now()
//   console.log('ms', end-start)

//   return result;

// }

function addNums10Timing(increment, numTimes = 1) {
  // Copy your `addNums10` code here
  // Then, add timing code

  let result = []
  for (let i = 1; i <= numTimes; i++){
    console.time("addNums10")
    let start = Date.now()
    for (let i = 1; i <= 10; i++){ //O(1)
      addNums(i*increment); //O(n)
    }
    console.timeEnd("addNums10")
    let end = Date.now()
    //console.log('ms', end-start)
    result.push(end-start)}
  return result;

}

function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code
let result = []

  console.time('AddMany')
  let start = Date.now()
  for (let i =increment; i<= increment*10; i+= increment){ //O(1)
    result.push(addManyNums(i)) //O(n^2)
  }
  console.timeEnd('AddMany')
  let end = Date.now()
  //console.log('ms', end-start)
  return result;

}


n = 1000000
console.log(`addNums(${n}): `);
console.log(addNums10Timing(1000000,1));
console.log(addNums10Timing(1000000,5));
console.log(addNums10Timing(1000000,10));

console.log("\n***********\n");

// n = 1000
// console.log(`addManyNums(${n}): `);
// addManyNums10Timing(5000);
