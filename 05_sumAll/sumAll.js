const sumAll = function(x, y) {
    let total = 0;
    if (x < 0 || y < 0 || typeof x !== "number" || typeof y !== "number") {
        return "ERROR";
    }
    if (x < y) {
        while (x != y+1) {
            total += x;
            x++;
        }
        return total;
    }
    else if (x > y) {
        while (x != y-1) {
            total += x;
            x--;
        }
        return total;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
