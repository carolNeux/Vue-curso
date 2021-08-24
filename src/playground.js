// /* eslint-disable */



// export default function() {
//     console.log('Hello World!!!!!!')
//   }
// // FUNCIONES PARTE1 **************************************************
// //   var person = {
// //     name: 'Filip',
// //     lastName: 'Jerga'
// //   }
// //   var person1 = {
// //     name: 'John',
// //     lastName: 'Snow'
// //   }

// //   function printUserInfo(user) {
// //     debugger
// //     console.log('Consoling log out person informations!')
// //     console.log('Hello ' + user.name + ' ' + user.lastName)
// //   }

// //   printUserInfo(person)
// //   printUserInfo(person1)
// //********************************************************************************** */



// // var hours = 23
// // var seconds = hours * 60 * 60
// // console.log(seconds)

// function transformHoursToSeconds (hours){
// return hours * 60 * 60
// }
// // debugger
// // var result = transformHoursToSeconds(19)
// // console.log(result);

// function printSomething(something){
// console.log(something)
// }
// printSomething(transformHoursToSeconds(10))
// // 36000 RESULTS

// printSomething((function(){
//     console.log('Hello World') ////RESULT: Hello World 
//     return 'Hello Digicard, Good job with coding'
// }()))
// // result =Hello Digicard, Good job with coding 
// printSomething({a:1, b:2})

// // result = {a:1, b:2}

// // Haciendo una funcion **********************
    
//     function countPersonBirthYear (personAge){
//         var currentYear = 2021
//         var birthYear = currentYear - personAge
//         return birthYear
//     }

// var resolveYear = countPersonBirthYear(15)
// console.log(resolveYear)
   
 
// export  default function() {

//     debugger
//     var result = 7 + 1
//     var result2 = 7 / 1
//     var result3 = 7 % 1
//     var result4 = 7 - 1
//     var result5 = 7 / 0
//     var result6 = 7 * 0

//     var b = 9  
//     var result7 = b++
//     var a = 7
//     var result8 = a--
//     var result9 = "Carol " + "Neu"
//     var result10 = "1" + 2
//     var result11 = 2 + "1"
//     var result12 = 3 + 3 + "1"
//     var result13 =  7 - "2"
//     var result14 = "8" / "4"
//     var result15 = 2 ** 3
//     debugger
//     result13 -= 2
//     result15 +=  7
// }

//****************    OBJECTS     ****************/
export  default function() {
  
  const person = {
    firstName:'pedro',
    lastName: 'almodovar', 
    age:55,
    printUserInfo(){
      console.log(`Hello ${this.firstName} ${this.lastName} of age ${this.age}`)
    },
      printSomething(callback) {
      callback()
      },

      helpers:{
        helperVar: "testin variable",
        helperFunc: function() {
        console.log(this.helperVar)
        }
      }
  }

  class Person {
    firstName = ''
    lastName = ''
    age

  helpers = {
    helperVar: "testin variable",
      helperFunc: function() {
        console.log(this.helperVar)
      }
  }

  /***************************************Diferentes maneras de escribir lo mismo */
  // constructor (firstName,lastName, age=0){
  // this.firstName = firstName
  // this.lastName = lastName
  // this.age = age
  // }

  // constructor (personData) {
  //   this.firstName = personaData.firstName
  //   this.lastName = personData.lastName
  //   this.age = personData.age
  //   }

// constructor ({firstName, lastName, age}) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     }

constructor (personData) {
  const {firstName, lastName, age = 100} = personData
  }


  printUserInfo(){ 
  console.log(`Hello ${this.firstName} ${this.lastName} of age ${this.age}`)
  }

  printSomething(callback){
    callback ()
    }
 

  }
 
  // const person1 =new Person ('Philip', 'Jerga', 28)
  // person1.printUserInfo()

  // const person2 = new Person ('Peter', 'Green', 44)
  // person1.printUserInfo()

  const person1 =new Person ({
    firstName:'Philip',
    lastName: 'Jerga', 
    })
  person1.printUserInfo()
  const person2 =new Person ({
    firstName:'Juan',
    lastName: 'Palote', 
    age:34})
  person2.printUserInfo()


}