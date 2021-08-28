let n = 5
if(n>=0)
{
    let fact=1;
    for(let i=1;i<=n;i++)
        fact *= i;
    console.log('Factorial of '+n+ ' is ' + fact);
}
else
    console.log('Value of n should not be negative');