
const firstFunction=(a,b,cb)=>{
    cb();
}
 
   
const cb=()=>{
    console.log(a+b)
}
var a=3;
var b=4;
firstFunction(a,b,cb)