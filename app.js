//Object Enhancement Exercises

//Same keys and values - ES5 Version
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

  //ES2015
//   function createInstructor(firstName, lastName){
//     return {
//       firstName,
//       lastName
//     };
//   }

  //Computed Property Names - ES5 Version
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

 //Computed Property Names - ES2015 Version
//  let favoriteNumber = 42;

//  const instructor = {
//    firstName: "Colt",
//    [favoriteNumber]: "That is my favorite!"
//  }

// Object Methods - ES5 Version
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName " + "says bye!";
//     }
//   }

  // Object Methods - ES2015 Version
// const instructor = {
//     firstName: "Colt",
//     sayHi(){
//       return "Hi!";
//     },
//     sayBye(){
//       return this.firstName  + "says bye!";
//     }
//   }

//createAnimal function

const d = createAnimal("dog", "bark", "Woooof!")

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")

const o = createAnimal("owl", "screech", "Hoooot!")

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}

