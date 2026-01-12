const input = process.argv[2]
const input2 = parseInt(input)

if(Number.isNaN(input) || input2<=0)
{
  console.log('Invalid Input')
}
for(let i = 1;i<=input2;i++)
{
  let result = ''
  for(let j = 1;j<=input2;j++)
  {
    if(i==1 ||i==input2){
    result += 'x'
    }
    else {
      if(j==1 ||j==input2){
      result += 'x'
      }
      else {
      result += 'o'
      }
    }
  }
  console.log(result)
}