let sum=0,count=5;
while (count>0)
{
 sum=sum+Math.floor(Math.random()*90)+10;
 count--;
}
console.log("Sum of five random 2-digit number is "+sum);
console.log("Average of five random 2-digit number is "+sum/5);