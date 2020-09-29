const narsisticNumber = (num) => {
    let m = 1, count = 0;
    while (num / m > 1) {
        m *= 10;
        count++;
    };
    let sum = 0, temp = num;
    while (temp) {
        sum += Math.pow(temp % 10, count);
        temp = Math.floor(temp / 10);
    };
    return sum === num;
};

const findOutlier = (integers) => {
    let evens = [];
    let odds = [];
    for (var i = 0; i < integers.length; i++) {
        if ((integers[i] % 2) === 0) {
            evens.push(integers[i]);
        }
        else {
            odds.push(integers[i]);
        }
    }
    let elen = evens.length;
    let olen = odds.length;

    if (elen > olen) {
        return odds[0];
    }
    else {
        return evens[0];
    }
}

const blueOcean = (arr, rm) => {
    return filtered = arr.filter(
        function (e) {
            return this.indexOf(e) < 0;
        }, rm
    )
}

const findNeedle = (arr, search) => {
    return arr.indexOf(search)
}