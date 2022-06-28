function sum(num1, num2) {
    return num1 + num2;
}

function random() {
    return Math.random();
}

function percentage(num, from) {
    return `${num / from *100}%`;
}

export {
    sum,
    random,
    percentage,
}