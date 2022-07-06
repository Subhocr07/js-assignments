var array=[]
window.onload=async ()=>{
    var response= await fetch ("https://jsonplaceholder.typicode.com/todos");
    array=await response.json();
    showAll();
}

function showAll(){
    var para=document.querySelectorAll('p');
    for(i=0;i<para.length;i++){
        var ptag=para[i]
        document.body.removeChild(ptag)
    }

    for(let i=0;i<array.length;i++){
        var obj=array[i];
        var p=document.createElement('p');
        if(obj.completed){
            p.style.color="green";
        }else{
            p.style.color="red";
        }
        p.innerText=obj.title;
        document.body.appendChild(p);
    }
}
function showCompleted(){
    var para=document.querySelectorAll('p');
    for(let i=0;i<para.length;i++){
        var ptag=para[i];
        document.body.removeChild(ptag);
    }

    for(let i=0;i<array.length;i++){
        var obj=array[i];
        var p=document.createElement('p');
        if(obj.completed){
            p.style.color="green";
            p.innerText=obj.title;
            document.body.appendChild(p);
        }
    }
}

function showPending(){
    var para=document.querySelectorAll('p');
    for(i=0;i<para.length;i++){
        var ptag=para[i]
        document.body.removeChild(ptag)
    }

    for(let i=0;i<array.length;i++){
        var obj=array[i];
        var p=document.createElement('p');
        if(!obj.completed){
            p.style.color="red";
            p.innerText=obj.title;
            document.body.appendChild(p);
        }
    }
}