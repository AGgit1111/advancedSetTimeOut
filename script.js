/* Chaining `setTimeout` for Recurring Execution

Instead of `setInterval`, you can use chained `setTimeout` calls for more dynamic intervals.
This can be useful if the interval needs to change after each execution, or if you want to
ensure that the previous operation completes before the next begins. */
function dynamicInterval() {
    // Perform some action
    console.log('Dynamic interval tick');

    // Schedule the next invocation with a potentially differnt delay
    setTimeout(dynamicInterval, Math.random() * 2000);
}

// Start the dymanic interval
setTimeout(dynamicInterval, 1000);

/* The line setTimeout(dynamicInterval, Math.random() * 2000); in the JavaScript code is doing two things:

    Scheduling the next invocation of the dynamicInterval function: The setTimeout function is used to schedule
    the dynamicInterval function to be called again after a certain amount of time. This creates a loop, but
    unlike setInterval, this loop allows for a variable amount of time between each call.

    Using a potentially different delay each time: The delay before the next call is determined by Math.random() * 2000.
    Here, Math.random() generates a random floating-point number between 0 and 1. This random number is then multiplied
    by 2000, resulting in a random delay between 0 and 2000 milliseconds (or 0 to 2 seconds). Each time this line is
    executed, it potentially sets a different delay for the next invocation of dynamicInterval. */

/* The line setTimeout(dynamicInterval, 1000); is used to start the dynamic interval process. Here's what it does:

    Calling the dynamicInterval function: The setTimeout function is used to schedule a call to the dynamicInterval
    function. This is the initial call that starts the entire process.

    Setting an initial delay: The second argument, 1000, specifies the delay before the dynamicInterval function is
    called for the first time. This delay is measured in milliseconds, so 1000 milliseconds equals 1 second. */
