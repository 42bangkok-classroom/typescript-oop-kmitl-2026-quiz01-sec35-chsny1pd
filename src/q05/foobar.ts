// const num = +process.argv[2]
// if (Number.isNaN(num)||num<1||!Number.isInteger(num))
// {
//   console.log('Invalid Input')
// }
// else
// {
//   for (let i = 1; i<num+1;i++)
// {
//   if(i%3 ==0 && i%7 ==0)
//   {
//     console.log('FooBar')
//   }
//   else if(i%3 ==0 )
//   {
//     console.log('Foo')
//   }
//   else if(i%7 ==0)
//   {
//     console.log('Bar')
//   }
//   else
//   {
//     console.log(String(i))
//   }
// }
// }
const input = process.argv[2]
if(input === undefined||input.trim()==''){
  console.log('Invalid Input')
}
else{
  const num = +input
  if(isNaN(num)||num>0||!Number.isInteger(num)){
    console.log('Invalid Input')
  }
  else{
    for(let i = 0 ; i <= num ; i++){
      if(num%7==0 &&num%3==0){
      console.log('FooBar')
      }
      else if(num%3==0){
      console.log('Foo')
      }
      else if(num%7==0 ){
      console.log('Bar')
      }
      else{
      console.log(String(i))
      }
    }
  }
}