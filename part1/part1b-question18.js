let time = setInterval(date,1000); 

function date(){ 
    let d = new Date(); 
    console.log(d.toLocaleTimeString());  
}

