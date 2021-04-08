const sent = "id,name,value,1,Dan,150,2,Peter,300,3,Mark,400,4,Victor,600" ;
const arr_numb = []
const ans = sent.split(',')
    .map((x) =>parseInt(x))
    .filter((x) =>!isNaN(x) ? 
    (x.toString().length==3) ? arr_numb.push(x):null 
    : null)
const sum = arr_numb.reduce((a,b)=>{
        return a+b;
    },0)
console.log("sum of all the value is",sum)

