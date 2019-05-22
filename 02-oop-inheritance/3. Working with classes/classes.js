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

  off(eventName, listener) {
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

const evEmitter = new EventEmitter();

// ------------------------------------------------------------------------------------------------
class Movie extends EventEmitter {

    constructor(title, year, duration, cast, evEmitter) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = cast;
        this.eventEm = evEmitter;
    }

    play() {
        this.eventEm.emit('play');
    }

    pause() {
        this.eventEm.emit('pause');        
    }

    resume() {
        this.eventEm.emit('resume');
    }

    getInfo() {
        console.log(`${this.title} was released in ${this.year} and lasts ${this.duration} minutes.`);        
    }

    addCast(cast) {
        if (cast.length == undefined)
            this.cast.push(cast);
        else {
            for (let i = 0; i < cast.length; i++) {
                this.cast.push(cast[i]);
            }
        }                 
    }
}

// ----------------------------------------------------------------------------------------------------------
class Actor {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let mov1 = new Movie('Terminator2', '1991', 137, [], evEmitter);
let mov2 = new Movie('Troya', '2004', 163);
let mov3 = new Movie('Batman: the dark night', '2008', 152);

const arnold = new Actor('Arnold Schwarzenegger', 71);
const actors = [
    new Actor('Edward Furlong', 41),
    new Actor('Robert Patrick', 60),
    new Actor('Linda Hamilton', 62)
]

class Logger {

    constructor(evEmitter) {
        this.evEm = evEmitter;
        evEmitter.on('play', () => {
            this.log('play event is playing..');
            
        });
    }

    log(info) {
        console.log(info);
    }
}


const logger = new Logger(evEmitter);
mov1.play();


    