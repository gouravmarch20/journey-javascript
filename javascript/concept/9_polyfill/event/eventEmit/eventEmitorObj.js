class EventEmitter {
    constructor(){
        this.emitObj = {}
    }
  
    subscribe(eventName, callback) {
         if(this.emitObj.hasOwnProperty(eventName)) {
            this.emitObj[eventName].push(callback);
        } else {
            this.emitObj[eventName] = [callback];
        }
      
        return {
            unsubscribe: () => {

                if(this.emitObj.hasOwnProperty(eventName)) {
                    this.emitObj[eventName] = this.emitObj[eventName].filter((cb) => cb !== callback);
                    if(this.emitObj[eventName]?.length === 0) {
                        delete this.emitObj[eventName];
                    }
                }

             
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {

           if (this.emitObj.hasOwnProperty(eventName)) {
            return this.emitObj[eventName].map((cb) => cb(...args));
        }
        return [];
    }
}

 // Test 1: Basic subscription and emitting
const emitter = new EventEmitter();

// Callback function for the "onClick" event
function onClickCallback() {
    return 99;
}

// Subscribe to the "onClick" event
const sub = emitter.subscribe('onClick', onClickCallback);

// Emit the "onClick" event
const result = emitter.emit('onClick');
console.log(result); // Expected output: [99], since the callback returns 99

// Test 2: Unsubscribe from event
sub.unsubscribe(); // Unsubscribing from "onClick"

// Emit the "onClick" event again (no callbacks should be triggered)
const resultAfterUnsubscribe = emitter.emit('onClick');
console.log(resultAfterUnsubscribe); // Expected output: [], since no callbacks are subscribed anymore

// Test 3: Subscribe again after unsubscribing
const sub2 = emitter.subscribe('onClick', onClickCallback);

// Emit the "onClick" event again
const resultAfterReSubscribe = emitter.emit('onClick');
console.log(resultAfterReSubscribe); // Expected output: [99], the callback is re-subscribed

// Test 4: Subscribe multiple callbacks to the same event
function anotherCallback() {
    return 42;
}

const sub3 = emitter.subscribe('onClick', anotherCallback);

// Emit the "onClick" event (both callbacks should be executed)
const resultMultipleCallbacks = emitter.emit('onClick');
console.log(resultMultipleCallbacks); // Expected output: [99, 42]

// Test 5: Unsubscribe one callback and check the remaining callback
sub2.unsubscribe(); // Unsubscribe the second callback

const resultAfterUnsubscribeOne = emitter.emit('onClick');
console.log(resultAfterUnsubscribeOne); // Expected output: [99], since only the first callback is left

// Test 6: Check if unsubscribing deletes the event when no callbacks are left
sub.unsubscribe(); // Unsubscribe the first callback

const resultAfterAllUnsubscribe = emitter.emit('onClick');
console.log(resultAfterAllUnsubscribe); // Expected output: [], since no callbacks are left for the "onClick" event
