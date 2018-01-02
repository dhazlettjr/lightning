// first lightning challenge

// let occupation = [
//     {name: "Bob", department: "sales", title: "sales manager"},
//     {name: "Tina", department: "finance", title: "director of finance"},
//     {name: "Randy", department: "IT", title: "hardware guy"},
//     {name: "Glenda", department: "C-suite", title: "CEO"},
//     {name: "Barb", department: "sales", title: "sales manager"}
// ]

// for ( i = 0; i < occupation.length; i++) {

// console.log(`${occupation[i].name}'s job title is ${occupation[i].title}`);
// }

// function stuff

//document.getElementById("btn").addEventListener("click", () => {
//     console.log("you clicked, good for you", event.target);

// });

// // let nums = ["one", "two", "three"];

// let name = "fred"
// let job = () => "I do the things";
// let number = 4;

// // es 6 short hand
// let myCollection = {
//     name, job, number
// };

// array methods
//let myArr = ["fred", true, 5, "this array is a mess"];

// array.reverse()
// array.slice()
//let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// let newArr = [];
// nums.forEach(thing => {
// newArr.push(thing *2);
// });

// console.log("newArr", newArr);

// let newArr = nums.map(thing => {
//     return thing * 2;
// });
// console.log("newArr", newArr, "Original arr", nums);

// let newerArr = nums.filter(thing=> {
//     return thing% 2 ===0;
// });
// console.log('newerArr', newerArr);

// let total = nums.reduce((thing1, thing2) => thing1 + thing2);
// console.log("total", total);

// // sort method

// let names = ["fred", "linda", "aaron", "andy", "zeke"]
// console.log("names sorted", names.sort());

//lightning day 2

// Make an object with at least three properties. One property should be a method
// Create a new object that links to the first object.
// Give the new object two properties of its own
// In the console, call .hasOwnProperty() on the new object, passing in an inherited property as an argument. Does it return true or false?
// Do it again, but this time pass in one of the properties you added to the new object. True or false?

// let macbook = {
//     price: 999,
//     size: "13 inch",
//     method: function() {
        
//     }
// };

// lightning day 3

// Lightning exercise:
// Loop over every item in this array [45, “I”, true, null, “am”, 3.56, “a”, undefined, { catchphrase: “Oh hai, Mark”}, “JS”, “rockstar”]  and return a new array that contains only strings. and log out the result.

// let myArr = [45, "I", true, null, "am", 3.56, "a", undefined,
//  { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"].filter((item)=>{
//      return typeof(item) === "string";
//  });

//  console.log('string array', myArr);

// let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];

 //for loop
// let fave_demo = [];

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] < 50 && ages[i] > 17) fave_demo.push(ages[1])
// };

 //foreach
// let favorite_demo = [];

// ages.forEach((age)=> { if (age < 50 && age > 17) favorite_demo.push(age)});

 //filter
// let fave_demo = ages.filter((age)=> age < 50 && age > 17)

// hitchhikers_guide = {
//     characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
//     catchphrase: "Don't Panic",
//     random_facts: {
//       copies_sold: 14000000,
//       formats: ["radio", "TV", "film", "graphic novel"],
//       ultimate_answer: {
//         meaning_of_life: 42
//       }
//     }
//   };

//   hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"];

let uppers = yoda_quote.map(function(yoda_quote) {
    return yoda_quote.charAt(0,1).toUpperCase() + yoda_quote.slice(1);
 });

console.log("Yoda says",uppers);



