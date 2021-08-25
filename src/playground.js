// eslint-disable



 export default function() {
// //     console.log('Hello World!!!!!!')
// //   }
// // // FUNCIONES PARTE1 **************************************************
// // //   var person = {
// // //     name: 'Filip',
// // //     lastName: 'Jerga'
// // //   }
// // //   var person1 = {
// // //     name: 'John',
// // //     lastName: 'Snow'
// // //   }

// // //   function printUserInfo(user) {
// // //     debugger
// // //     console.log('Consoling log out person informations!')
// // //     console.log('Hello ' + user.name + ' ' + user.lastName)
// // //   }

// // //   printUserInfo(person)
// // //   printUserInfo(person1)
// // //********************************************************************************** */



// // // var hours = 23
// // // var seconds = hours * 60 * 60
// // // console.log(seconds)

// // function transformHoursToSeconds (hours){
// // return hours * 60 * 60
// // }
// // // debugger
// // // var result = transformHoursToSeconds(19)
// // // console.log(result);

// // function printSomething(something){
// // console.log(something)
// // }
// // printSomething(transformHoursToSeconds(10))
// // // 36000 RESULTS

// // printSomething((function(){
// //     console.log('Hello World') ////RESULT: Hello World 
// //     return 'Hello Digicard, Good job with coding'
// // }()))
// // // result =Hello Digicard, Good job with coding 
// // printSomething({a:1, b:2})

// // // result = {a:1, b:2}

// // // Haciendo una funcion **********************
    
// //     function countPersonBirthYear (personAge){
// //         var currentYear = 2021
// //         var birthYear = currentYear - personAge
// //         return birthYear
// //     }

// // var resolveYear = countPersonBirthYear(15)
// // console.log(resolveYear)
   
 
// // export  default function() {

// //     debugger
// //     var result = 7 + 1
// //     var result2 = 7 / 1
// //     var result3 = 7 % 1
// //     var result4 = 7 - 1
// //     var result5 = 7 / 0
// //     var result6 = 7 * 0

// //     var b = 9  
// //     var result7 = b++
// //     var a = 7
// //     var result8 = a--
// //     var result9 = "Carol " + "Neu"
// //     var result10 = "1" + 2
// //     var result11 = 2 + "1"
// //     var result12 = 3 + 3 + "1"
// //     var result13 =  7 - "2"
// //     var result14 = "8" / "4"
// //     var result15 = 2 ** 3
// //     debugger
// //     result13 -= 2
// //     result15 +=  7
// // }

// //****************    OBJECTS     ****************/


// export default function() {

//   const person = {
//     firstName: 'Filip',
//     lastName: 'Jerga',
//     age: 28,
//     printUserInfo() {
//       console.log(`Hello ${this.firstName} ${this.lastName} of age: ${this.age}`)
//     },
//     printSomething(callback) {
//       callback()
//     },
//     helpers: {
//       helperVar: "testin variable",
//       helperFunc: function() {
//         console.log(this.helperVar)
//       }
//     }
//   }


//   class Person {
//     firstName = ''
//     lastName = ''
//     age
//     helpers = {
//       helperVar: "testin variable",
//       helperFunc: function() {
//         console.log(this.helperVar)
//       }
//     }
//   }


//   // constructor (firstName,lastName, age=0){
//   // this.firstName = firstName
//   // this.lastName = lastName
//   // this.age = age
//   // }

//   constructor(firstName, lastName, age, school, hospital);{
//     super(firstName,lastName, age)
//     this.hospital = Hospitalthis.school = school

//   }
//   constructor(personData);{
//     const { firstName, lastName, age = 100 } = personData

//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//   }
    
//   printUserInfo();{
//     console.log(`Hello ${this.firstName} ${this.lastName} of age: ${this.age}`)
//   }

//   printSomething(callback) ;{
//     callback()
//   }

//   persist(database);{
//     database.save(() =>
//         ({
//           userName: `${this.firstName} ${this.lastName}`,
//           age: this.age
//         })
//       )
//   }

  
//   class Doctor extends Person{

//     hospital = ''
//     school =''

//     constructor ({school, hospital, firstName, lastName, age}){

//       super({firstName, lastName, age})
//       super({personData})

//       this.hospital = hospital
//       this.school = school
//       }
//       printUserInfo(){
//         super.printUserInfo()
//         alert('I AM CALLING printUserInfo FORM DOCTOR')
//       }
//   }

//   class Database {
//     items = []
//     save(getDataCallback) {
//       const data = getDataCallback()
//       this.items.push(data)
//     }
//   }
  
//   const db = new Database()

//     // const doctor = new Doctor({
//     //   firstName: 'Xime', 
//     //   lastName: 'Posse', 
//     //   age: 39,
//     //   hospital: 'Testing Hospital',
//     //   school: 'Testing School',
//     // })

//     // Person.prototype.myProtoFunction= function(){
//     //   console.log('I am Proto !!!' )
//     // }

//     // Object.prototype.myObjFunction= function(){
//     //   console.log(' I am my object Proto');
//     // }
//   const doctor = new Doctor(
//     'Xime', 'Camacho', 39,'Testing School','Testing Hospital'
//   )

//     // doctor.printUserInfo()
//     // doctor.persist(db)

//   const person1 = new Person({firstName: 'Filip', lastName: 'Jerga'})
//     // person1.printUserInfo()

//     //Every instance created using new Person() has  a __proto__ property
//     //wich points to the Person. prototype

//     // This is the chain that is used to traverse to find a property of 
//     // a particular object.

//     // __proto__ is the actual object that is used in the lookup chain to
//     // resolve methods, etc  prototype is the object that is used to build 
//     //__proto__ when you create an object with new:
   
//     // const person2 = new Person({age: 56, firstName: 'Carol', lastName: 'Neu'})
//     // person2.printUserInfo()


//     // person1.persist(db)
//     // person2.persist(db)

//     // console.log(db.items)

/**************************If if else else */
  // if (2 > 5 &&  1<12){
  //   console.log('Welcome in true values')
  // }  else {
  //   console.log('Welcome in false');
  // }

  // if (true) {
  //   console.log('True or false?')
  // } else {
  //   console.log('True or false?')
  // }

  // if (true && false) {
  //   console.log('True or false?')
  // } else {
  //   console.log('True or false?')
  // }

  // if (false || true) {
  //   console.log('True or false?')
  // } else {
  //   console.log('True or false?')
  // }

  // if (5 > 7) {
  //   console.log('True or false?')
  // }

  // const results = 5 < 7 && 4 > 2
  // if (5 < 7 && 4 > 2) {
  //   console.log('True or false?')
  // }

  // if (5 < 7) {
  //   console.log('True or false?')
  // }

  // const results2 = 5 < 7 || 7 < 1
  // if (5 < 7 || 7 < 1) {
  //   console.log('True or false?')
  // }

  // if (5 >= 5) {
  //   console.log('True or false?')
  // }

  // if (3 <= 5) {
  //   console.log('True or false?')
  // }

  // if (2 * 3 == 6) {
  //   console.log('True or false?')
  // }

  // if (doctor.school === 'Harvard' || doctor.age > 45) {
  //   console.log('True or false?')
  // }

  // doctor.school === 'Harvard' && doctor.age > 30 && alert('Hello World')


    // if(5 > 7){
    //   console.log('I am called, Hurray');
    // } else if(4 > 10){
    //   console.log('Welcome in else if block')
    // }
    // else
    // {console.log( 'I am called too')}
    

    const personList = [
       {firstName: 'Carol', lastName: 'Perez'},
       {firstName: 'Filip', lastName: 'Jerga'},
       {firstName: 'Carol', lastName: 'Neu'},
       {firstName: 'Jane', lastName: 'Doe'}
    ]

    // for(let i = 0; i < personList.length; i++){
    //   console.log(personList[i].firstName);
    // }

     // for(let i =20; i>5; i--){
    //   console.log(i);
    // }

    personList.forEach(function(person, index){
      console.log(index)
      console.log(person.firstName)
    })

    // lo mismo escrito con arrow
    personList.forEach(person => console.log(person.firstName));
    personList.forEach(person => console.log(person.lastName));
      
    /*****MAP **********/
    // const personNamesList = personList.map(function(person){
    //   return person.firstName
    // })

    // const personNamesList = personList.map(person => person.firstName
    //    )
    
    /*****FILTER **********/

    const filteredNames = personList.filter(person => person.firstName === 'Carol' )

    console.log(filteredNames);
    
    

   
 
 
  
}
