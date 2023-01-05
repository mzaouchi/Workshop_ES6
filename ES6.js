// Scope
// function Scoope(){

//     // {
//     //   let a = "Hello"
//     //   // console.log(a)
//     // }
//     // console.log(a)
  
//     // {
//     //   var a = 5
//     //   // console.log(a)
//     // }
//     // console.log(a)
  
//     {
//       const a = 9
//       // console.log(a)
//     }
//     console.log(a)
  
  
  
//     return('Hello ES6')
//   }
  
//   console.log(Scoope())

// Const
// // const a = 9
// // // a = 9
// // const b = "Hello"
// // b = "Jo"
// // const tab =[1,2,3,4]
// // tab[1] = 10
// // console.log(tab)
// // tab = 7
// const obj ={name : "Amine",old : 20}
// obj.name = "Raslen"
// console.log(obj)

// Arrow function

// function Somme(a,b){
//     return a+b
// }

// console.log(Somme(2,4))

// let Somme=(a,b)=>{
//   return a+b
// }

// console.log(Somme(3,4))

// const Somme=(a,b)=> a+b

// console.log(Somme(1,3))

// let name=a=> 'Hello '+a

// console.log(name('Raslen'))

// var Hello=()=> "Hello ES6"

// console.log(Hello())


// Templete

// // let name=a=> 'Hello 
// // my firend '+a

// // console.log(name('Raslen'))

// let name = a => `Hello 
// my 
// firend 
// ${a}`
// console.log(name("Mamino"))

// Ternary
// var age = 44

// if(age<=18){
//   console.log("Jeune")
// }else if(age<=60){
//   console.log("adulte")
// }else{
//   console.log('Vieux')
// }

// age <= 18 ? console.log("Jeune") : age <= 60 ? console.log("adulte") : console.log('Vieux')
// var num = 3

// if(num % 2 == 0){
//   console.log("Pair")
// }else{
//   console.log("Impair")
// }

// num % 2 == 0 ? console.log("Pair") : console.log("Impair")



// const num = 3


// num % 2 == 0 ? console.log("Pair")

// num % 2 == 0 && console.log("Pair")


// Des

// const obj = {name : "Aziz",age :20, city :{street : "laouina", cp : 2045}}

// // const Hello=(a)=> `My name is ${a.name}, im ${a.age} and im from ${a.city.street}`

// // console.log(Hello(obj))

// // const Hello=(a)=>{
// //   const {name,age,city} = a
// //   const  {street}= city
  
// //   return `My name is ${name}, im ${age} and im from ${street}`
// // }

// // console.log(Hello(obj))


// const Hello = ({ name, age, city }) =>`My name is ${name}, im ${age} and im from ${city.street}`


// console.log(Hello(obj))

// const tab = [1,3]

// const [a,b] = tab

// console.log(a)


// Spread

// var a = [1,2,3]
// var b = [6,8,9,10]

// // var c = []

// // for(var i = 0;i<a.length;i++){
// //   c.push(a[i])
// // }
// // console.log(c)

// // for (var i = 0; i < b.length; i++) {
// //   c.push(b[i])
// // }

// // console.log(c)

// // console.log(a+b)

// // c = a.concat(b)
// // console.log(c)

// // console.log([...a,...b,99,77,55])

// const obj = { name: "Aziz", age: 20, city: { street: "laouina", cp: 2045 } }

// obj.name = 'Rasslen'

// console.log(obj)

// console.log({...obj, track : 'FullStackjs'})
// console.log({ ...obj, name : "Mahmoud" })



// ArrayFunction
// const tab =[1,2,3,4]

// // console.log(tab.reduce(function (accumulateur, valeurCourante, index, array) {
// //   return accumulateur + valeurCourante*2;
// // }) )

// console.log(tab.reduce((a,b,c,d)=>a+b+c))

// const tab = [1, 2, 3, 4]

// // console.log(tab.map((el,i,t)=> el+1))

// // console.log(tab)


// // console.log(tab.forEach((el, i, t) => el + 1))

// tab.forEach((el, i, t) => console.log(el+1))

// const tab = [1, 2, 3, 4]

// // console.log(tab.filter((el,i,t)=> el>2))
// var c = tab.filter((el, i, t) => el % 2 == 0)
// console.log(c)

// const tab = [1, 2, 3, 4]

// console.log(tab.find((el,i,t)=> el == 3))

// const tab = [1, 2, 3, 4]

// console.log(tab.findIndex((el,i,t)=> el == 9))

// const tab = [6,77,1,0]

// // console.log(tab.sort())

// console.log(tab.sort((a,b)=> b-a))

// const tab = [6,77,1,0]



// console.log(tab.splice(1))
// // console.log(tab.splice(1,2))
// // console.log(tab.splice(0, 3))


// const tab = [6,77,1,0]

// const str = "Mamino the best mana3rafch chnowa"

// // console.log(str.split())
// // console.log(str.split(""))
// // console.log(str.split(" "))
// // console.log(str.split("a"))

// // console.log(tab.join())
// console.log(tab.join(""))
// console.log(tab.join(" "))



















