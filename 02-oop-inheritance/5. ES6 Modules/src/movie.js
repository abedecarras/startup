import EventEmitter from './eventEmitter';

class Movie extends EventEmitter {

    constructor(title, year, duration, cast) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = cast;
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

let mov1 = new Movie('Terminator2', '1991', 137, []);
let mov2 = new Movie('Troya', '2004', 163);
let mov3 = new Movie('Batman: the dark night', '2008', 152);

mov1.on('play', function() {
    console.log(`The 'play' event has been emitted`);
});
