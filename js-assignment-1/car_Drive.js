const Drive=()=>{
    let licence=document.getElementById('licence').value;
    let tired=document.getElementById('tired').value;
    let sober=document.getElementById('sober').value;
    
    if((licence==='true') && !(tired=='true') && (sober==='true')){
        console.log('You can drive');
    }else{
        console.log('you can not drive');
    }    
    
}