const num = +process.argv[2]
if (Number.isNaN(num)||num<0)
{
  console.log('Invalid Input')
}

let result = 1
if (num == 0)
{
 console.log(result)
}
else
{
    for (let i = 1; i<num+1;i++)
    {
        result *= i
    }
    console.log(result)
}