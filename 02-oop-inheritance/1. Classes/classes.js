// class Movie
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

console.log(mov1.getInfo());
console.log(mov2.getInfo());
console.log(mov3.getInfo());

// ----------------------------------------------------------------------------------------------------------
class Actor {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// ----------------------------------------------------------------------------------------------------------
class EventEmitter {

    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if( !this.events[eventName] ) {
            this.events[eventName] = [];
          }
            this.events[eventName].push(callback);
    }

    emit(eventName) {
        const event = this.events[eventName];
        if( event ) {
          event.forEach(fn => {
             fn.call(null);
           });
         }       
    }

    off(eventName, callback) {
        let listeners = this.events[eventName];

      if (listeners) {
          for (let i = listeners.length; i > 0; i--) {
            if (listeners[i] == listener) {
                listeners.splice(i, 1);
                break;
            }                            
          }
      } 
    }
}
