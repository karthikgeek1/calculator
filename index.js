let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((btn)=>btn.addEventListener('click', (event)=>{
    let key=event.target.innerText;
    if(key=='A/C'){
        display.innerText="";
    }
    else if(key=='Del'){
        display.innerText=display.innerText.slice(0,-1);
    }
    else if(key=="="){
        display.innerText = eval(display.innerText);
    }
    else{
        display.innerText+=key
    }
}))