const op = process.argv[2]
const a = +process.argv[3]
const b = +process.argv[4]

if (Number.isNaN(a)||Number.isNaN(b))
{
    console.log('Invalid Input')
}
else{
    switch(op)
    {
    case 'add' :
        const addresult = a+b
        console.log(addresult)
        break;
    case 'sub' :
        const subresult = a-b
        console.log(subresult)
        break;
    case 'mul' :
        const mulresult = a*b
        console.log(mulresult)
        break;
    case 'div' :
        if(b==0)
        {
        console.log('Invalid input')
        break;
        }
        else
        {
        const divresult = a/b
        console.log(divresult)
        break;
        }
    default : console.log('Invalid Operation')
    }
}

