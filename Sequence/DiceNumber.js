//UC1 Getting a single digit number between 0 and 9 
let randNum= Math.floor(Math.random()*10);

//UC2 Getting a die number between 1 and 6
let diceRoll=Math.floor(Math.random()*6)+1;
console.log(diceRoll);

//UC3 Getting the sum of 2 die number
let count=2,sum=0;
while(count>0)
{
    sum=sum+Math.floor(Math.random()*6)+1;
    count--;
}
console.log("Sum of 2 dice number is "+sum); 