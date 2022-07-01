const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  // name: String,
  name: {
    type: String,
    required: [true, "Please check, name field not found"]
    //it will implement the code only if it will find any name in this else it won't be executed  Q. 1.A
    //if not found then it will execute the mentioned error message
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  // name: "Apple",
  //if we comment this out then it will show the error msg mentioned in Q 1.A
  name: "Apple",
  rating: 4,
  review: "Solid one"
});

// fruit.save();
// DON'T FORGET TO UNCOMMENT IT WHEN WE WANT TO SAVE IT

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 7,
  review: "Something about it!"
});

// pineapple.save();

const person = new Person({
  // name: "John",
  // age: 41
  name: "Amy",
  age: 41,
  favouriteFruit: pineapple
});

// person.save();

// Person.updateOne(
//   {_id: "62b5e671a9ce95e3c52a6753"},
//   {favouriteFruit: pineapple},
//   function(err){
//       if(err) {
//         console.log("Error");
//     } else{
//         console.log("Successfully Updated");
//       }
//     }
// );

//WE HAVE BASICALLY USED THE ABOVE LINE OF CODE TO UPDATE THE PINEAPPLE IN A NAME AMY WHICH DOESNT HAD THE FAVOURITE FRUIT COLUMN INTO IT


// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 8,
//   review: "Somthinggg"
// });

// const mango = new Fruit({
//   name: "mango",
//   rating: 19,
//   //here we have made the rating more than 10 so that we can see some error on it
//   review: "Somthinggggg"
// });

// Fruit.insertMany([kiwi, mango], function(err){
//   if(err){
//     console.log(err);
//   } else{
//     console.log("Success");
//   }
// });

//here the above code is entring the data into the fruit schema that we have declared outside the fruit schema

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else{
    // console.log(fruits);
    //now to avoid pressing Control+C everytime we execute the above code we use the below code

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      // console.log(fruit.name);
      console.log(fruit);
      //above will help us in getting the unique "id" for each of the entry so that we can update that accordingly
    });
  }
});

//above code will find the code that was written to us

// Fruit.updateOne(
//   {_id: "62b5c14ff7d71be59e370293"},
//   {name: "JASMINE"},
//   function(err){
//     if(err) {
//       console.log("Error");
//   } else{
//       console.log("Successfully Updated");
//     }
//
// });

//so above code will successfully update the entry whatever it is in it with the ID we have mentioned in the code

// Fruit.deleteOne(
//   {_id: "62b5c14ff7d71be59e370293"},
//   function(err){
//     if(err) {
//       console.log("Error");
//   } else{
//       console.log("Successfully Updated");
//     }
// });

// Person.deleteMany(
//   {name: "John"},
//   function(err){
//     if(err) {
//       console.log("Error");
//   } else{
//       console.log("Successfully Updated");
//     }
// });

// Fruit.deleteMany(
//   {name: "Pineapple"},
//   function(err){
//     if(err) {
//       console.log("Error");
//   } else{
//       console.log("Successfully Updated");
//     }
// });

//it will delete only when it is having the delete into it
//we can check whether it is deleted or not by typing db.fruits.find() in place where we have typed mongo

//hence the entry is deleted
