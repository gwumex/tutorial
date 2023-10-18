// let sales: number = 123_456_789;
// let course: string = "hello"
// let is_published = true;


// function render (document: any){
//     console.log(document);
// }

// render("hello")

// // arrays

// let numbers: string[] = []


// // numbers.forEach(n => n.)


// // tupples

// let user: [number, string] = [1,  'Mosh']
// user.push(1)

// console.log(user);

// // enums

// // const small = 1;
// // const medium= 2;
// // const large = 3;

// const enum Size {Small = 1, Medium, Large}

// console.log(Size);

// function

// function calculateTax(income: number, taxYear: number = 1000): number{
//     if (taxYear < 50_000)
//         return income * 1.2;
//     return income * 1.3
// }

// calculateTax(10_000)

// // object
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1, 
//     name: "mosh",
//     retire: (date: Date) =>{
//         console.log(date);
//     }
//     }
// employee.name = ("mosh")

// // union types
// function kgToLbs(weight: number | string): number {
//     // narr
//     if (typeof weight === 'number')
//         return weight * 2.2
//     else
//         return parseInt(weight) * 2.2
// }

// kgToLbs(10)
// kgToLbs('10kg')


// // type intersection

// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }

// // literal types
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch';


// // Nullable Type
// function greet(name: string | null){
//     console.log(name.toUpperCase());
// }
// greet(null)


// optional chaining
type Customer = {
    birthday: Date 
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {
        birthday: new Date()
    };
}

let customer = getCustomer(1);

console.log(customer?.birthday.getFullYear());