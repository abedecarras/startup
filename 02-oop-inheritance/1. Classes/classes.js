class Movie {

    constructor(title, year, duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play() {
        console.log('playing!..');
    }

    pause() {
        console.log('pause.');
    }

    resume() {
        console.log('resuming..');
    }

    getInfo() {
        console.log(`${this.title} was released in ${this.year} and lasts ${this.duration} minutes.`);        
    }
}

let mov1 = new Movie('Terminator2', '1991', 137);
let mov2 = new Movie('Troya', '2004', 163);
let mov3 = new Movie('Batman: the dark night', '2008', 152);

class Actor {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class EventEmitter {

    constructor() {

    }

    on(eventName, callback) {
        console.log(eventName);
        callback();
    }

    emit(eventName) {
        console.log(eventName);        
    }

    off(eventName, callback) {
        console.log(eventName);
        callback;
    }
}

let ev1 = new EventEmitter();

ev1.on('click', function() {
     console.log('clicking');
    });