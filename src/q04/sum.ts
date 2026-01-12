const input = process.argv[2]
if (input === undefined || input.trim() === '' )
{
 console.log('Invalid Input')
}
else
{
  const num = +input
if (Number.isNaN(num)||num<=0||!Number.isInteger(num))
{
  console.log('Invalid Input')
}
else
{
let result = 0
for (let i = 1; i<num+1;i++)
{
  result += i
}
console.log('Sum:',String(result))
}
}