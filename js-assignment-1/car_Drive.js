const Drive=()=>{
    let licence=document.getElementById('licence').value;
    let tired=document.getElementById('tired').value;
    let sober=document.getElementById('sober').value;
    
        if((licence==='true') && !(tired=='true') && (sober==='true')){
            message=('You can drive');
        }else{
            message= ('you can not drive');
        } 
   document.getElementById('Result').innerHTML=message;
}