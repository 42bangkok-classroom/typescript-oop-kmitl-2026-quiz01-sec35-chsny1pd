const input = process.argv[2]
if (input === undefined || input.trim() === '' )
{
 console.log('Invalid input')
}
else
{
  const num = +input
if (Number.isNaN(num)||num<=0)
{
  console.log('Invalid Input')
}

let result = 0
for (let i = 1; i<num+1;i++)
{
  result += i
}
console.log('Sum :',String(result))
}