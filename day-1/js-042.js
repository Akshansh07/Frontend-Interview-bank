// Explain setTimeout with 0 delay.

/*
    A delay 0 milliseconds does not mean the callback executes immediately. The current synchonous code must finish first, and 
    applicable microtask must be processed before the runtime proceeds to the timer task.
*/ 