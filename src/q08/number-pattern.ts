// const input = +process.argv[2]

// if(Number.isNaN(input) || input<=0||!Number.isInteger(input))
// {
//   console.log('Invalid Input')
// }
// else
// {for(let i = 0;i<input;i++)
// {
//   let result = ''
//   let k = input-i
//   for(let j = input-i;j>=1;j--)
//   {
//     result += k
//     k--
//   }
//   console.log(result)
// }
// }

const input = process.argv[2]
if(input === undefined || input.trim()==''){
  console.log('Invalid Input')
}
else{
  const num = +input
  if(isNaN(num)||num<=0||!Number.isInteger(num)){
    console.log('Invalid Input')
  }
  else{
    for(let i = num ; i > 0 ; i--){
      let result = ''
      for(let j = i ; j >0 ; j--){
          result += j
      }
      console.log(result)
    }
  }
}