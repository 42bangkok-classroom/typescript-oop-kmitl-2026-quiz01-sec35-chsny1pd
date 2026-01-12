const input = +process.argv[2]

if(Number.isNaN(input) || input<=0)
{
  console.log('Invalid Input')
}
for(let i = 1;i<=input;i++)
{
  let result = ''
  for(let j = 1;j<=input;j++)
  {
    if(i==1 ||i==input){
    result += 'x'
    }
    else {
      if(j==1 ||j==input){
      result += 'x'
      }
      else {
      result += 'o'
      }
    }
  }
  console.log(result)
}