module.exports = function reverse (n) {
    a = Math.abs(n);
    a = a + "";
    return a.split("").reverse().join("");;  
}
