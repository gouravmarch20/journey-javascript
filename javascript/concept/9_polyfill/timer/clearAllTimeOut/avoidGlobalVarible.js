const MY_TIMER = {
    intervalIds: [], // Global array to store interval IDs

    // Custom setInterval function
    setInterval: function (fn, delay) {
        let id = setInterval(fn, delay);
        this.intervalIds.push(id);
        return id;
    },

    // Custom clearAllIntervals function
    clearAllInterval: function () {
        while (this.intervalIds.length) {
            clearInterval(this.intervalIds.pop()); // Corrected to clearInterval
        }
    }
};

// Test Cases
MY_TIMER.setInterval(() => {
    console.log("Hello");
}, 2000);

MY_TIMER.setInterval(() => {
    console.log("Hello2");
}, 500);

// Clears all intervals before setting a new one
MY_TIMER.clearAllInterval();

MY_TIMER.setInterval(() => {
    console.log("Hello3");
}, 1000);
