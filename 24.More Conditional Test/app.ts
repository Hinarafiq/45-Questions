let car: string = "BMW";
let age: number = 24;
let numbers: number[] = [1,2,3,4];
 //Equlity with strings
 console.log("Is car == 'BMW?'");
 console.log(car == 'BMW');
 //Strictequality with string
 console.log("Is car === 'BMW?'");
 console.log(car === 'BMW');
 //Inequality with string
console.log("Is car != 'Toyota?'");
console.log(car != "Toyota");
//CaseSensitive Inequality with string
console.log("Is car !== 'BMW?'");
console.log(car !== "BMW");

//LowerFunction 

//Lower Case Conversion
console.log("Is car.toLowerCase() == 'BMW'?");
console.log(car.toLowerCase() == 'BMW')
//Lower Case Conversion
console.log("Is car.toLowerCase() === 'BMW'?");
console.log(car.toLowerCase() === "BMW");

//Numericals

//Equality
console.log("Is age == '24'?");
console.log(age == 24);
//Inequality
console.log("Is age != '20'?");
console.log(age != 20);
//GreaterThan
console.log("Is age > '30'?");
console.log(age > 30);
//LessThan Or Equal
console.log("Is age <= '24'?");
console.log(age <= 24);

//Logical Operators

//&&
console.log("Is age > 20 && age < 30?");
console.log(age > 20 && age < 30);
//||
console.log("Is age > 30 || age < 18 ?");
console.log(age > 30 || age < 18);

//Array

//In Array
console.log("Is 3 in numbers ?");
console.log(3 in numbers);
//Not In Array
console.log("Is 5 not in numbers ?");
console.log(5 in numbers);