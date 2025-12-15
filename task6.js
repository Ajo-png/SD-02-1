// Refer to Task 6 in your Instructions to complete this task
const res = [];

for(let i = 1; i <= 105; i++){
  if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0){
    res.push("FizzBuzzWoof");
  } else if(i % 3 == 0 && i % 7 == 0){
    res.push("FizzWoof");
  } else if (i % 5 == 0 && i % 7 == 0){
    res.push("BuzzWoof");
  } else if (i % 3 == 0 && i % 5 == 0){
    res.push("FizzBuzz");
  } else if (i % 3 == 0){
    res.push("Fizz");
  } else if (i % 5 == 0){
    res.push("Buzz");
  } else if (i % 7 == 0){
    res.push("Woof");
  } else {
    res.push(i);
  }
}

console.log(res);