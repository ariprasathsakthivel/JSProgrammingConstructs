const year = 2016
if (year % 400 == 0)
console.log(year+" is a Leap year");
else if (year % 100 == 0)
console.log(year+" is not a Leap year");
else if (year % 4 == 0)
console.log(year+" is a Leap year");
else
console.log(year+" is not a Leap year");