const getEven=()=>{
    var input=document.getElementById('input').value
    var item=input.split(',').map(Number);
    var evenArray=[];
    for(i in item){
        if(item[i]%2===0){
            evenArray.push(item[i]);
        }
    }
    console.log(evenArray)
    document.getElementById('evenArrayRes').innerHTML=(`Even array  ${evenArray}`);
}


const multiPlyByN=()=>{
    var input=document.getElementById('input').value
    var item=input.split(',').map(Number);
    let mulArray=[]
    var n=document.getElementById('n').value
    for(i in item){
        mulArray.push(item[i]*n)
    }
    document.getElementById('mulArrayRes').innerHTML=(`Array after multiplyied by ${n} is  ${mulArray}`);

}
const removeElement=()=>{
    var input=document.getElementById('input').value
    var item=input.split(',').map(Number);
    var n=document.getElementById('n').value
    item.splice(n,1);
    console.log(item);
    document.getElementById('removeRes').innerHTML=(`Array after removing ${n}th index element ${item}`);
}
const sumFunc=()=>{
    getEven();
    multiPlyByN();
    removeElement();
}