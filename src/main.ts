// class Coder {

//     secondLang!: string

//     constructor(
//         public readonly name: string, 
//         public music: string,
//         private age: number,
//         protected lang: string ="Typescript"
//         ) {            
//         this.name = name
//         this.age = age
//         this.lang = lang
//         this.music = music
//     }
//     public getAge(){
//         return `Hello, I'm ${this.age}`
//     }
// }


// const Dave = new Coder('Dave', 'Rock', 42)

// console.log( Dave.getAge())
// console.log( Dave.music)



// class WebDev extends Coder {
//     constructor(
//         public computer: string,
//         name: string,
//         music: string,
//         age: number,
//     ) {
//         super(name, music, age)
//         this.computer = computer

//     }

//     public getLang() {
//         return `I write ${this.lang}`
//     }
// }


// const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)

// console.log(Sara.getLang());
// console.log(Sara.getAge());



// interface Musician {
//     name: string,
//     instrument: string,
//     play(action: string): string
// }

// class Guitarist implements Musician {
//     name: string
//     instrument: string
//     constructor(name: string, instrument: string){
//         this.name = name
//         this.instrument = instrument
//     }

//     play(action: string): string {
//         return `${this.name} ${action} the ${this.instrument}`
//     }
// }

// const Page = new Guitarist('Jimmy', 'guitar')
// console.log(Page.play('strums'));

// /////////////////////////////////////////////////////////

// class Peeps{

//     static count: number = 0

//     static getCount(): number {
//         return Peeps.count
//     }
//     public id: number

//     constructor(public name: string){
//         this.name = name
//         this.id = ++Peeps.count
//     }
// }

// const John = new Peeps('John')
// const Steve = new Peeps('Steve')
// const Amy = new Peeps('Amy')
// const Amy1 = new Peeps('Amy1')
// console.log(Peeps.count);
// console.log(Steve.id);

// Abstract class representing a vehicle
// abstract class Vehicle {
//     private make: string;
//     private model: string;
  
//     constructor(make: string, model: string) {
//       this.make = make;
//       this.model = model;
//     }
  
//     // An abstract method to calculate the vehicle's mileage
//     abstract calculateMileage(): number;
  
//     // A concrete method to get the vehicle's details
//     getDetails(): string {
//       return `Make: ${this.make}, Model: ${this.model}, Mileage: ${this.calculateMileage()} mpg`;
//     }
//   }
  
//   // Concrete class representing a car
//   class Car extends Vehicle {
//     private fuelCapacity: number;
//     private fuelConsumption: number;
  
//     constructor(make: string, model: string, fuelCapacity: number, fuelConsumption: number) {
//       super(make, model);
//       this.fuelCapacity = fuelCapacity;
//       this.fuelConsumption = fuelConsumption;
//     }
  
//     calculateMileage(): number {
//       return this.fuelCapacity / this.fuelConsumption;
//     }
//   }
  
//   // Concrete class representing a motorcycle
//   class Motorcycle extends Vehicle {
//     private tankCapacity: number;
//     private fuelEfficiency: number;
  
//     constructor(make: string, model: string, tankCapacity: number, fuelEfficiency: number) {
//       super(make, model);
//       this.tankCapacity = tankCapacity;
//       this.fuelEfficiency = fuelEfficiency;
//     }
  
//     calculateMileage(): number {
//       return this.tankCapacity / this.fuelEfficiency;
//     }
//   }
  
//   // Usage
//   const myCar = new Car("Toyota", "Camry", 15, 30);
//   const myMotorcycle = new Motorcycle("Harley-Davidson", "Sportster", 4, 50);
  
//   console.log(myCar.getDetails());
//   console.log(myMotorcycle.getDetails());

// class Bands {
//     private dataState: string[]
    
//     constructor() {
//         this.dataState = []
//     }

//     public get data(): string[] {
//         return this.dataState
//     }

//     public set data(value: string[] ) {
//         if (Array.isArray(value) && value.every(el => typeof el === 'string')){
//              this.dataState = value
//             return
//         } else throw new Error('Param is not an array of strings')
//     }
// }

// const MyBands = new Bands()
// MyBands.data = ['Neil Young', 'Led Zep']
// console.log(MyBands.data);
// MyBands.data = [...MyBands.data, 'ZZ Top']
// console.log(MyBands.data);
// MyBands.data = ['Van Halen', 5150]

// INDEX SIGNATURES & KEYOF ASSERTIONS
    interface  Transactionobj {
        Pizza: number,
        Books: number,
        Job: number
    }    

    const todaysTransactions: Transactionobj = {
        Pizza: -10,
        Books: -5,
        Job: 50
    }

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza'