const num = +process.argv[2]
if (Number.isNaN(num)||num<1||!Number.isInteger(num))
{
  console.log('Invalid Input')
}
else
{
  for (let i = 1; i<num+1;i++)
{
  if(i%3 ==0 && i%7 ==0)
  {
    console.log('FooBar')
  }
  else if(i%3 ==0 )
  {
    console.log('Foo')
  }
  else if(i%7 ==0)
  {
    console.log('Bar')
  }
  else
  {
    console.log(String(i))
  }
}
}