let euroCities = [
  "Paris",
  "London",
  "Valletta",
  "Prague",
  "Rome",
  "Athens",
  "Lyons",
  "Budapest",
];
euroCities[0] = "Berlin"; // change first item
console.log(euroCities);
console.log(euroCities.length); //prints the length or number of items in the array
euroCities.pop(); // removes last item on the list i.e Budapest
console.log(euroCities);
euroCities.push("Bonn");
console.log(euroCities);
euroCities.splice(1, 2); // removes second and third items- London and Valletta
console.log(euroCities);

// TASK 7
const asianCities = [
  "Beijing",
  "Taipei",
  "Nagoya",
  "Singapore",
  "Manila",
  "Mumbai",
  "Lhasa",
  "Jinan",
];
console.log(asianCities);
const newAsianCities = asianCities.splice(1, 3); // selects items 2 to 4, stores as new variable
console.log("new variable is: ", newAsianCities);
const worldCities = asianCities.concat(euroCities);
console.log("These are world cities: ", worldCities);
worldCities.reverse();
console.log("worldCities in reverse:", worldCities);
worldCities.splice(2, 1, "Toronto"); //removes third item and replaces with one item
console.log("Toronto replaces third item:", worldCities);
worldCities.splice(1, 0, "Washington"); //Washington inserted at second position without deleting anything
console.log("Washington inserted:", worldCities);

let worldCitiesString = worldCities.join();
console.log("Array to string with comma:", worldCitiesString);
worldCitiesString = worldCities.join("+");
console.log("Array to string with +:", worldCitiesString);

//Bonus: Write a program to reverse the string: "Hello World".
let greet = "Hello World"; // create a variable
let splitString = greet.split(""); // split constituent words of items
console.log(splitString);
let reversedString = splitString.reverse(); // Reverse them using the .reverse method
console.log(reversedString);
let output = reversedString.join(""); //Join the split elements again using array method ".join"
console.log("Hello World in reverse order:", output);

// Extra Practice
// Make an array of your siblings' names or your favorite movie characters' names.
let personae = ["Ukwa", "Ibu", "Pedro", "Sharon", "Loco", "Osuofia"];
// Make an array of your parents' names.
let parents = ["Johnson", "Cecilia", "Asonganyi", "Efuet"];
// Combine these two arrays.
let combined = personae.concat(parents);
console.log(combined);
// Add your pets' names.
combined.push("None", "OnceHad");
console.log("Plus pets", combined);
// Reverse the order of the array.
let reverseOrder = combined.reverse();
console.log(reverseOrder);
// Access one of your parents' names.
console.log(combined.slice(3, 4)); //Access Asonganyi
//Update the name of one of your parents.
