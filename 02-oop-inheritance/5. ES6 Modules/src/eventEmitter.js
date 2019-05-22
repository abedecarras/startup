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

export default EventEmitter;
    
// Mixins
// let social = {
//     share(friendName) {
//         console.log(`${friendName} share ${this.title}`);
        
//     },

//     like(friendName) {
//         console.log(`${friendName} likes ${this.title}`);
        
//     }
// }

// Object.assign(Movie.prototype, social);

// const ironman = new Movie('Iron-man', '2005', 115, []);

// // ironman.share('Mike Blossom');
