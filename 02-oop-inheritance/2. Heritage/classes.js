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

// ------------------------------------------------------------------------------------------------
class Movie extends EventEmitter {

    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play() {
        this.emit('play');
    }

    pause() {
        this.emit('pause'); 
    }

    resume() {
        this.emit('resume');
    }

    getInfo() {
        console.log(`${this.title} was released in ${this.year} and lasts ${this.duration} minutes.`);        
    }
}

let mov1 = new Movie('Terminator2', '1991', 137);
let mov2 = new Movie('Troya', '2004', 163);
let mov3 = new Movie('Batman: the dark night', '2008', 152);

mov1.on('play', function() {
    console.log(`The 'play' event has been emitted`);  
});

mov2.on('pause', function() {
    console.log(`The 'pause' event has been emitted`);  
});

mov3.on('resume', function() {
    console.log(`The 'resume' event has been emitted`);  
});

console.log(mov1);
console.log(mov2);
console.log(mov3);

mov1.play();
mov2.pause();
mov3.resume();

// ----------------------------------------------------------------------------------------------------------
class Actor {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

    