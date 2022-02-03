nums = [2, 6, 8, 14, 4, 2, 18, 0];

function avg(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}
console.log(avg(nums));