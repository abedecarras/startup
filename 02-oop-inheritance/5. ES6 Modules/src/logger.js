class Logger {
    constructor() {
        evEmitter.on('play', () => {
            this.log('play event is playing..');
            
        });
    }

    log(info) {
        console.log(info);
    }
}

const log = new Logger();