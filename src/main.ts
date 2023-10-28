// // class Coder {

// //     secondLang!: string

// //     constructor(
// //         public readonly name: string, 
// //         public music: string,
// //         private age: number,
// //         protected lang: string ="Typescript"
// //         ) {            
// //         this.name = name
// //         this.age = age
// //         this.lang = lang
// //         this.music = music
// //     }
// //     public getAge(){
// //         return `Hello, I'm ${this.age}`
// //     }
// // }


// // const Dave = new Coder('Dave', 'Rock', 42)

// // console.log( Dave.getAge())
// // console.log( Dave.music)



// // class WebDev extends Coder {
// //     constructor(
// //         public computer: string,
// //         name: string,
// //         music: string,
// //         age: number,
// //     ) {
// //         super(name, music, age)
// //         this.computer = computer

// //     }

// //     public getLang() {
// //         return `I write ${this.lang}`
// //     }
// // }


// // const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)

// // console.log(Sara.getLang());
// // console.log(Sara.getAge());



// // interface Musician {
// //     name: string,
// //     instrument: string,
// //     play(action: string): string
// // }

// // class Guitarist implements Musician {
// //     name: string
// //     instrument: string
// //     constructor(name: string, instrument: string){
// //         this.name = name
// //         this.instrument = instrument
// //     }

// //     play(action: string): string {
// //         return `${this.name} ${action} the ${this.instrument}`
// //     }
// // }

// // const Page = new Guitarist('Jimmy', 'guitar')
// // console.log(Page.play('strums'));

// // /////////////////////////////////////////////////////////

// // class Peeps{

// //     static count: number = 0

// //     static getCount(): number {
// //         return Peeps.count
// //     }
// //     public id: number

// //     constructor(public name: string){
// //         this.name = name
// //         this.id = ++Peeps.count
// //     }
// // }

// // const John = new Peeps('John')
// // const Steve = new Peeps('Steve')
// // const Amy = new Peeps('Amy')
// // const Amy1 = new Peeps('Amy1')
// // console.log(Peeps.count);
// // console.log(Steve.id);

// // Abstract class representing a vehicle
// // abstract class Vehicle {
// //     private make: string;
// //     private model: string;
  
// //     constructor(make: string, model: string) {
// //       this.make = make;
// //       this.model = model;
// //     }
  
// //     // An abstract method to calculate the vehicle's mileage
// //     abstract calculateMileage(): number;
  
// //     // A concrete method to get the vehicle's details
// //     getDetails(): string {
// //       return `Make: ${this.make}, Model: ${this.model}, Mileage: ${this.calculateMileage()} mpg`;
// //     }
// //   }
  
// //   // Concrete class representing a car
// //   class Car extends Vehicle {
// //     private fuelCapacity: number;
// //     private fuelConsumption: number;
  
// //     constructor(make: string, model: string, fuelCapacity: number, fuelConsumption: number) {
// //       super(make, model);
// //       this.fuelCapacity = fuelCapacity;
// //       this.fuelConsumption = fuelConsumption;
// //     }
  
// //     calculateMileage(): number {
// //       return this.fuelCapacity / this.fuelConsumption;
// //     }
// //   }
  
// //   // Concrete class representing a motorcycle
// //   class Motorcycle extends Vehicle {
// //     private tankCapacity: number;
// //     private fuelEfficiency: number;
  
// //     constructor(make: string, model: string, tankCapacity: number, fuelEfficiency: number) {
// //       super(make, model);
// //       this.tankCapacity = tankCapacity;
// //       this.fuelEfficiency = fuelEfficiency;
// //     }
  
// //     calculateMileage(): number {
// //       return this.tankCapacity / this.fuelEfficiency;
// //     }
// //   }
  
// //   // Usage
// //   const myCar = new Car("Toyota", "Camry", 15, 30);
// //   const myMotorcycle = new Motorcycle("Harley-Davidson", "Sportster", 4, 50);
  
// //   console.log(myCar.getDetails());
// //   console.log(myMotorcycle.getDetails());

// // class Bands {
// //     private dataState: string[]
    
// //     constructor() {
// //         this.dataState = []
// //     }

// //     public get data(): string[] {
// //         return this.dataState
// //     }

// //     public set data(value: string[] ) {
// //         if (Array.isArray(value) && value.every(el => typeof el === 'string')){
// //              this.dataState = value
// //             return
// //         } else throw new Error('Param is not an array of strings')
// //     }
// // }

// // const MyBands = new Bands()
// // MyBands.data = ['Neil Young', 'Led Zep']
// // console.log(MyBands.data);
// // MyBands.data = [...MyBands.data, 'ZZ Top']
// // console.log(MyBands.data);
// // MyBands.data = ['Van Halen', 5150]

// // INDEX SIGNATURES & KEYOF ASSERTIONS
//     // interface  Transactionobj {
//     //     Pizza: number,
//     //     Books: number,
//     //     Job: number
//     // } 
    
    
// //     interface  Transactionobj {
// //       readonly [index: string]: number 
// //       Pizza: number,
// //       Books: number,
// //       Job: number
// //     }    

// //     const todaysTransactions: Transactionobj = {
// //         Pizza: -10,
// //         Books: -5,
// //         Job: 50
// //     }

// // console.log(todaysTransactions.Pizza);
// // console.log(todaysTransactions['Pizza']);

// // let prop: string = 'Pizza'
// // // console.log(todaysTransactions[prop]);

// // const todaysNet = (transactions: Transactionobj):
// // number => {
// //     let total = 0
// //     for (const transaction in transactions){
// //         // console.log(typeof(transactions[transaction]));
// //         total += transactions[transaction]
// //     }
// //     return total
// // }

// // console.log(todaysNet(todaysTransactions));

// // console.log(todaysTransactions['Dave']);
// // //////////////////////////////////////////////////////

// // interface Student {
// //     // [index: string]: any
// //     name: string,
// //     GPA: number,
// //     classes?: number[]
// // }

// // const student: Student = {
// //     name: "Doug",
// //     GPA: 3.5,
// //     classes: [100, 200]
// // }

// // for (const key in student){
// //     console.log(`${key}: ${student[key as keyof Student]}`);
// // }

// // Object.keys(student).map(key => {
// //     console.log(student[key as keyof typeof student]);
// // } )



// // const logStudentKey = (student: Student, key: keyof Student): void => {
// //     console.log(`Student ${key}: ${student[key]}`);
// // }

// // logStudentKey(student, 'GPA')
// // /////////////////////////////////////////////////

// // // interface Incomes {
// // //     [key: string]: number

// // // }

// // type Streams = 'salary' | 'bonus' | 'sidehustle'

// // type Incomes = Record<Streams, number>

// // const monthlyIncomes: Incomes = {
// //     salary: 500,
// //     bonus: 100,
// //     sidehustle: 250
// // } 


// // for (const revenue in monthlyIncomes) {
// //     console.log(monthlyIncomes[revenue as keyof Incomes]);
// // }
// // Generics
// // const echo = <T>(arg: T): T => arg

// // const isObj = <T>(arg: T): boolean => {
// //     return(typeof arg === 'object' && !Array.isArray(arg) && arg !==null)
// // }

// // console.log(isObj({name: 'John'}));

// // const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
// //     if (Array.isArray(arg) && !arg.length){
// //         return {arg, is: false}
// //     }
// //     if (isObj(arg) && !Object.keys(arg as keyof T).length) {
// //         return { arg, is: false}
// //     }
// //     return {arg, is: !!arg}
// // }

// // console.log(isTrue([1, 2, 3]));

// // interface BoolCheck<T> {
// //     value: T,
// //     is: boolean
// // }

// // const isTrue = <T>(arg: T): BoolCheck<T> => {
// //     if (Array.isArray(arg) && !arg.length){
// //         return { value: arg, is: false}
// //     }
// //     if (isObj(arg) && !Object.keys(arg as keyof T).length) {
// //         return { value: arg, is: false}
// //     }
// //     return {value: arg, is: !!arg}
// // }


// interface HasID {
//     id: number
// }

// // const processUser = <T extends HasID>(user: T): T => {
// //     //process the user with logic here
// //     return user
// // }


// // console.log(processUser({id: 1, name: 'Dave'}));



// const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
//     return users.map(user => user[key])
// }

// // using generic in a class 

// class StateObject<T> {
//     private data: T

//     constructor(value: T){
//         this.data = value
//     }

//     get state(): T {
//         return this.data
//     }

//     set state (value: T) {
//         this.data = value
//     }
// }

// const store = new StateObject("John")

// console.log(store.state);
// store.state = "Dave"
// // store.state = 12


// const myState = new StateObject<(string|number|boolean)[]>([15])


// // Utility type

// partial 
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updatteAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return{...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "compsci12",
    title: "Final Project",
    grade: 0,
}

console.log(updatteAssignment(assign1, {grade: 95}));
const assignGraded: Assignment = updatteAssignment(assign1, {grade: 95})
console.log(assignGraded);

// Required and readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc.

    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}


// Record

const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

type Students = "Sara" | "kelly"

type LetterGrades = "A" | "B" | "C" | "D" | "U"


const finalGrades: Record <Students, LetterGrades> = {
    Sara: 'B',
    kelly: "U"
}

// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">

type AssignPreview = Omit<Assignment, "grade" | "verified">

// extract and extract
type adjustableGrade = Exclude<LetterGrades, "U">

type highGrades = Extract< LetterGrades, "A" | "B">

// nonnullable

type allPossibleGrades = "Dave" | "John" | null | undefined

type NamesOnly = NonNullable<allPossibleGrades>


// Return type

// type newAssign = {title: string, points: number}

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}

type newAssign =  ReturnType<typeof createNewAssign>


const tsAssign: newAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign);

// Parameters 
type assignParams = Parameters<typeof createNewAssign>

const assignArgs: assignParams = ["Generics", 100]

// awaited helps 