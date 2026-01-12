const input1 = process.argv[2]
const input2 = process.argv[3]
if (input1 === undefined || input1.trim() === '' ||input2 === undefined || input2.trim() === '')
{
 console.log('Invalid Input')
}
else
{
  const balance = +input1
  const amount = +input2
  if (Number.isNaN(balance)||Number.isNaN(amount)||balance<0||amount<0||String(balance)==''||String(amount)=='')
{
  console.log('Invalid Input')
}
else if(amount>=balance)
{
  console.log('Insufficient balance')
}
else if(amount>5000)
{
  console.log('Exceeds per-withdrawal limit')
}
else
{
  console.log('Withdrawal approved')
}
}
