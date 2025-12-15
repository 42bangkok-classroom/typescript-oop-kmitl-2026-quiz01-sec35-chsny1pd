const balance = +process.argv[2]
const amount = +process.argv[3]

if (Number.isNaN(balance)||Number.isNaN(amount)||balance<0||amount<0)
{
  console.log('Invalid Input')
}
else if(amount>balance)
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