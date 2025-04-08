var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;

class MyPromise {
    constructor(executor) {
        this.state = PENDING;
        this.value = null;
        this.handlers = [];

        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);

        try {
            executor(this.resolve, this.reject);
        } catch (err) {
            this.reject(err);
        }
    }

    resolve(value) {
        if (value instanceof MyPromise) {
            return value.then(this.resolve, this.reject);
        }
        this.updateState(FULFILLED, value);
    }

    reject(reason) {
        this.updateState(REJECTED, reason);
    }

    updateState(state, value) {
        if (this.state !== PENDING) return;

        setTimeout(() => {
            this.state = state;
            this.value = value;
            this.executeHandlers();
        }, 0);
    }

    executeHandlers() {
        if (this.state === PENDING) return;

        this.handlers.forEach(handler => {
            if (this.state === FULFILLED) {
                handler.onFulfilled?.(this.value);
            } else {
                handler.onRejected?.(this.value);
            }
        });

        this.handlers = [];
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this.addHandler({
                onFulfilled: (value) => {
                    try {
                        if (typeof onFulfilled === "function") {
                            const result = onFulfilled(value);
                            result instanceof MyPromise ? result.then(resolve, reject) : resolve(result);
                        } else {
                            resolve(value);
                        }
                    } catch (err) {
                        reject(err);
                    }
                },
                onRejected: (reason) => {
                    try {
                        if (typeof onRejected === "function") {
                            const result = onRejected(reason);
                            result instanceof MyPromise ? result.then(resolve, reject) : resolve(result);
                        } else {
                            reject(reason);
                        }
                    } catch (err) {
                        reject(err);
                    }
                }
            });
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    finally(callback) {
        return this.then(
            value => {
                callback();
                return value;
            },
            reason => {
                callback();
                throw reason;
            }
        );
    }
}
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
});

promise
    .then(value => {
        console.log("First then:", value);
        return "Next value";
    })
    .then(value => {
        console.log("Second then:", value);
        throw "An error occurred!";
    })
    .catch(err => {
        console.error("Caught error:", err);
    })
    .finally(() => {
        console.log("Finally executed!");
    });
