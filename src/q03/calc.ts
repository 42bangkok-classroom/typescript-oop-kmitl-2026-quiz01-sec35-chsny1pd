// const op = process.argv[2]
// const input1 = process.argv[3]
// const input2 = process.argv[4]
// if (input1 === undefined || input1.trim() === '' ||input2 === undefined || input2.trim() === '')
// {
//  console.log('Invalid input')
// }
// else
// {
//   const a = +input1
//   const b = +input2
// if (Number.isNaN(a)||Number.isNaN(b))
// {
//     console.log('Invalid input')
// }
// else{
//     switch(op)
//     {
//     case 'add' :
//         const addresult = a+b
//         console.log(String(addresult))
//         break;
//     case 'sub' :
//         const subresult = a-b
//         console.log(String(subresult))
//         break;
//     case 'mul' :
//         const mulresult = a*b
//         console.log(String(mulresult))
//         break;
//     case 'div' :
//         if(b==0)
//         {
//         console.log('Invalid input')
//         break;
//         }
//         else
//         {
//         const divresult = a/b
//         console.log(String(divresult))
//         break;
//         }
//     default : console.log('Invalid operator')
//     }
// }
// }
const input1 = process.argv[2]
const input2 = process.argv[3]
const input3 = process.argv[4]
if(input2 === undefined||input2.trim()==''||input3 === undefined||input3.trim()==''){
    console.log('Invalid input')
}
else{
    const a = +input2
    const b = +input3
    if(isNaN(a)||isNaN(b)){
        console.log('Invalid input')
    }
    else{
        switch(input1){
        case 'add' : 
        const addresult = a+b
        console.log(String(addresult)) 
        break;
        case 'sub' : 
        const subresult = a-b
        console.log(String(subresult)) 
        break;
        case 'mul' : 
        const mulresult = a*b
        console.log(String(mulresult)) 
        break;
        case 'div' : 
        if(b == 0){
            console.log('Invalid input')
            break;
        }
        else{
            const divresult = a/b
            console.log(String(divresult)) 
            break;
        }
        default : console.log('Invalid operator')
    }
    }
}

