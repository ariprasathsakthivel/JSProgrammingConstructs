const StartNum = 10;
const EndNum = 50;
console.log('The prime numbers between '+StartNum+' and '+EndNum+' are:');
for (let i = StartNum; i <= EndNum; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}