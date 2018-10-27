// function isWindy(speed) {
    if (speed > 5) {
        return true;
    } else {
        return false;
    }
}

let speed = 6

if (isWindy(speed) === true) {
    alert('It is windy');
} else {
    alert('It is not windy');
}