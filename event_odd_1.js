// create a function that an integer as argument and returns "Event" for even numbersn"Odd" for add numbers
function event_odd (value) {
    if(value % 2 === 0) {
        return "event";
    }else {
        return "add";
    }
}

console.log(event_odd(190))

function event_odd (value) { return value % 2 === 0 ? "even" : "add"; }

console.log(event_odd(190))