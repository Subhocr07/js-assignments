const createObject=()=>{
    let firstname=document.getElementById('firstname').value
    let lastname=document.getElementById('lastname').value
    let name=document.getElementById('name').value
    let title=document.getElementById('title').value
    let arr=[firstname,name,lastname,title];
    console.log(arr)
    let obj={};
    arr.forEach((currentElements,index) =>{
        if(index%2==0){
            obj[currentElements]=arr[index+1]
        }
    });
    console.log(obj)
    let myobj=JSON.stringify(obj);
    console.log(typeof(myobj));
    document.getElementById('result').innerHTML=myobj;
}