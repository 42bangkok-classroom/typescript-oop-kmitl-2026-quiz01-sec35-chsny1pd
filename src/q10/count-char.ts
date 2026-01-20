// const input: string = process.argv[2] ?? "";

// let letters = 0;
// let digits = 0;
// let others = 0;

// if (input === undefined || input.trim() === '')
// {
//  console.log('')
// }
// else
// {
//   for (const char of input) {
//   if (/[a-zA-Z]/.test(char)) 
//   {
//     letters++;
//   } 
//   else if (/[0-9]/.test(char)) 
//   {
//     digits++;
//   } 
//   else 
//   {
//     others++;
//   }
// }

// console.log(`Letters: ${letters}`);
// console.log(`Digits: ${digits}`);
// console.log(`Others: ${others}`);
// }
const input = process.argv[2]
let letters = 0
let digits = 0
let others = 0
if(input === undefined || input.trim()==''){
  console.log('')
}
else{
  for (const char of input){
    if (/[a-zA-Z]/.test(char)){
      letters++;
    }
    else if (/[0-9]/.test(char)){
      digits++;
    }
    else{
      others++;
    }
  }
console.log('Letters:',String(letters))
console.log('Digits:',String(digits))
console.log('Others:',String(others))
}
