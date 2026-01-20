// const input = +process.argv[2]

// if(Number.isNaN(input) || input<=0||!Number.isInteger(input))
// {
//   console.log('Invalid Input')
// }
// else
// {
//   for(let i = 0;i<input;i++)
// {
//   let result = ''
//   for(let k = 1;k<=i;k++)
//   {
//     result += ' '
//   }
//   for(let j = 0;j<input;j++)
//   {
//     result += '*'
//   }
//   console.log(result)
// }
// }

const input = process.argv[2]
if(input === undefined || input.trim()==''){
  console.log('Invalid Input')
}
else{
  let num = +input
  if(isNaN(num)||num<=0||!Number.isInteger(num)){
    console.log('Invalid Input')
  }
  else{
    for(let i = 0 ; i < num ; i++){
      let result = ''
      for(let k = 0;k<i;k++)
      {
        result += ' '
      }
      for(let j = 0; j < num ; j++){
          result += '*'
          }
      console.log(result)
    }
  }
}