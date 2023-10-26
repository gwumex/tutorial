"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.music = music;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
console.log(Dave.music);
console.log(Dave.age);
console.log(Dave.lang);
//# sourceMappingURL=main.js.map