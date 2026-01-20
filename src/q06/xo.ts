// const input = +process.argv[2]

// if(Number.isNaN(input) || input<=0||!Number.isInteger(input))
// {
//   console.log('Invalid Input')
// }
// else
// {
//   for(let i = 1;i<=input;i++)
// {
//   let result = ''
//   for(let j = 1;j<=input;j++)
//   {
//     if(i==1 ||i==input){
//     result += 'x'
//     }
//     else {
//       if(j==1 ||j==input){
//       result += 'x'
//       }
//       else {
//       result += 'o'
//       }
//     }
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
    for(let i = 0 ; i < num ; i++){
      let result = ''
      for(let j = 0 ; j < num ; j++){
        if(i==0||i==num-1){
          result += 'x'
        }
        else{
          if(j==0||j==num-1){
            result += 'x'
          }
          else{
            result += 'o'
          }
        }
      }
      console.log(result)
    }
  }
}