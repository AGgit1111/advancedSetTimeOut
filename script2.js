/* Using `setInterval` with Clearing Logic

You can use `setInterval` with a condition to clear itself. This is useful when you want to
stop the interval after a certain condition is met. */
let count = 0;
const maxCount = 5;

const intervalId = setInterval(() => {
    console.log('Interval Tick');
    if (++count >= maxCount) {
        clearInterval(intervalId);
        console.log('Interval cleared');
    }
}, 2000);