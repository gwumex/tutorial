// // // let sales: number = 123_456_789;
// // // let course: string = "hello"
// // // let is_published = true;

// // // function render (document: any){
// // //     console.log(document);
// // // }

// // // render("hello")

// // // // arrays

// // // let numbers: string[] = []


// // // // numbers.forEach(n => n.)


// // // // tupples

// // // let user: [number, string] = [1,  'Mosh']
// // // user.push(1)

// // // console.log(user);

// // // // enums

// // // // const small = 1;
// // // // const medium= 2;
// // // // const large = 3;

// // // const enum Size {Small = 1, Medium, Large}

// // // console.log(Size);

// // // function

// // // function calculateTax(income: number, taxYear: number = 1000): number{
// // //     if (taxYear < 50_000)
// // //         return income * 1.2;
// // //     return income * 1.3
// // // }

// // // calculateTax(10_000)

// // // // object
// // // type Employee = {
// // //     readonly id: number,
// // //     name: string,
// // //     retire: (date: Date) => void
// // // }

// // // let employee: Employee = {
// // //     id: 1, 
// // //     name: "mosh",
// // //     retire: (date: Date) =>{
// // //         console.log(date);
// // //     }
// // //     }
// // // employee.name = ("mosh")

// // // // union types
// // // function kgToLbs(weight: number | string): number {
// // //     // narr
// // //     if (typeof weight === 'number')
// // //         return weight * 2.2
// // //     else
// // //         return parseInt(weight) * 2.2
// // // }

// // // kgToLbs(10)
// // // kgToLbs('10kg')


// // // // type intersection

// // // type Draggable = {
// // //     drag: () => void
// // // }

// // // type Resizable = {
// // //     resize: () => void
// // // }

// // // type UIWidget = Draggable & Resizable;

// // // let textBox: UIWidget = {
// // //     drag: () => {},
// // //     resize: () => {}
// // // }

// // // // literal types
// // // type Quantity = 50 | 100;
// // // // let quantity: Quantity = 100;

// // // // type Metric = 'cm' | 'inch';


// // // // // Nullable Type
// // // // function greet(name: string | null){
// // // //     console.log(name.toUpperCase());
// // // // }
// // // // greet(null)


// // // // optional chaining
// // // type Customer = {
// // //     birthday: Date 
// // // };

// // // function getCustomer(id: number): Customer | null {
// // //     return id === 0 ? null : {
// // //         birthday: new Date()
// // //     };
// // // }

// // // let customer = getCustomer(1);

// // // console.log(customer?.birthday.getFullYear());


// // // let username: string;

// // // username = "josh"

// // // let a: number = 12
// // // let b: number = 6
// // // let c: number = 2


// // // console.log(a / b);

// // // const sum =  (a: number) :string =>  {
// // //     if (a > 1)
// // //     return "hello"
// // //     else{
// // //     return "hi"  
// // //     } 
// // // }


// // // let re: RegExp = /\w+/g

// // // let num: number | string | object = {}

// // // let stringArr = ['one', 'Les paul', 5150]

// // // let guitars = ['Strat', 'Les Paul', 5150]

// // // let test = []

// // // let bands: string[] = []

// // // bands.push("Van Halen")

// // // console.log(bands);


// // // let myObj: object 
// // // myObj = []
// // // console.log(typeof myObj);

// // // type Guitarists = {
// // //     name: string,
// // //     active?: boolean,
// // //     albums: (string | number)[]
// // //     year?: number
// // // }

// // // interface Guitarist {
// // //     name: string,
// // //     active?: boolean,
// // //     albums: (string | number)[]
// // //     year?: number
// // // }

// // // let evh: Guitarist = {
// // //     name: 'Eddie',
// // //     active: false,
// // //     albums: [1968, '4529', 1895, '']
// // // }

// // // let jp: Guitarist = {
// // //     name: 'Jimmy',
// // //     active: true,
// // //     albums: ['I', 'II', 'IV']
// // // }
// // // evh.year= 1998

// // // console.log(evh);

// // // const greetGuitarist = (guitarist: Guitarist) => {
// // //      if (guitarist.name){
// // //         return `Hello ${guitarist.name.toUpperCase()}`
// // //      }
// // //      return `Hello! who ever the fuck you`
// // // }

// // // console.log(greetGuitarist(jp));

// // // // enums 

// // // enum Grade {
// // //     U = 90,
// // //     D,
// // //     C,
// // //     B,
// // //     A
// // // }

// // // console.log(Grade.C);

// // // functions
// // // type aliases
// // // type stringOrNumberArray = (string | number)[]

// // // type stringOrNumber = string | number


// // // type Guitarist = {
// // //     name?: string,
// // //     active?: boolean,
// // //     albums: stringOrNumberArray
// // // }

// // // type userId = stringOrNumber

// // // interface PostId = stringOrNumber
// // // // literal types

// // // let myName: "dave"

// // // let userName: 'Dave' | 'John' | 'Any'

// // // userName = 'Any'

// // // // functions

// // // // const add = (a: number, b: number): number => {
// // // //     return a + b
// // // // }

// // // const logMsg = (message: any): void => {
// // //     console.log(message);
// // // }

// // // // // logMsg('Hello')
// // // // // logMsg(add(2, 3))

// // // // // type mathFunction = (a: number, b: number) => number
// // // // // let multiply: mathFunction = function (c, d){
// // // // //     return c* d
// // // // // }

// // // const addAll = (a: number = 10, b: number, c: number = 2):
// // // number => {
// // //     if (typeof c !== 'undefined'){
// // //         return a + b + c
// // //     }
// // //     return a + b
// // // }

// // // logMsg(addAll(undefined, 3))

// // // // rest parameters

// // // const total = (...nums: number[]): number => {
// // //     return nums.reduce((prev, curr) => prev + curr)
// // // }
// // // logMsg(total(1, 2, 3, 4))

// // // // never type

// // // const createError = (errMsg: string) => {
// // //     throw new Error(errMsg)
// // // }

// // // const infinite = ()=> {
// // //     let i: number = 1
// // //     while (true)[
// // //         i++
// // //         if (i > 100)
// // //         break
// // //     ] 

// // // }
// // const numberOrString = (value: number | string):
// // string => {
// //     if (typeof value === 'string') return 'string'
// //     if (typeof value === 'number') return 'number'
// //     return createError('This should never happen!')
// // }

// // const isNumber = (value: any): boolean => {
// //     return typeof value === 'number'
// //         ? true : false
// // }

// // // type casting
// type One = string
// type Two = string | number
// type Three = 'hello'


// // convert to more or less specific
// let a: One = 'hello'
// let b = a as Two // less specific
// let c = a as Three //more specific

// let d = <One>'world'
// let e = <string | number>'world'

// const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
//     if (c === 'add') return a + b
//     return '' + a + b
// }


// let myVal: string = addOrConcat(2,2, 'concat') as string

// // becareful! TS sees no problem - but a string is returned
// let nextVal: number = addOrConcat(2,2, 'concat') as number


// (10 as unknown) as string

// // The DOM 
// const img = document.querySelector('img') as HTMLImageElement
// const myImg = document.getElementById('#img') as HTMLImageElement

// img.src
// myImg.src

