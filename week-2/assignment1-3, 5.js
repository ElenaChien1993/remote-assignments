/*
Assignment 1: Function and Array
*/

function max(numbers) {
	let maxNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}

max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7

/*
Assignment 2: Object
*/

function calculate(args) {
	let result;
	if (args.op === "+") {
		result = args.n1 + args.n2;
	} else if (args.op === "-"){
		result = args.n1 - args.n2;
	} else {
		result = "Not supported";
	}
	return result;
}

// first way: object literal
const args = {
	op: '+',
	n1: 4, 
	n2: 8
}

calculate(args); // return: 12

// another way: class
class Obj {
  constructor (op, n1, n2) {
    this.op = op;
    this.n1 = n1;
    this.n2 = n2;
  }
}

calculate(new Obj('-', 78, 44)) // return: 34

/*
Assignment 3: Function, Array, and Object
*/

function avg(data) {
	let totalPrice = 0;
  for (let i = 0; i < data.products.length; i++) {
    totalPrice += Object.values(data)[1][i].price
    // console.log(totalPrice);
  }
  let avgPrice = totalPrice / data.products.length;
  return avgPrice;
}

avg({
	size:3,
	products:[
	{
		name:"Product 1",
		price:100
	},
	{
		name:"Product 2",
		price:700
	},
	{
		name:"Product 3",
		price:250
	}
	]
}); // show the average price of all products

/*
Assignment 5: Algorithm Practice (Advanced Optional)
*/

function twoSum(nums, target){
	let ans = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // console.log(`${nums[i]} + ${nums[j]} = ${nums[i] + nums[j]}`);
      if (nums[i] + nums[j] == target) {
        ans = [i, j];
      } 
    }
  }
  return ans;
}