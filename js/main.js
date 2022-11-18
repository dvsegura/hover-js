function showMyDiv(e){     
    let x =  e.pageX;
    let y = e.pageY;  
    
    document.getElementById("myDiv").style.top = y + 20 + "px";
    document.getElementById("myDiv").style.left = x + 20 + "px";    
}

function show(elem){
  document.getElementById("myDiv").classList.remove("hide");
    console.log(elem.style.width);
}

function hideMyDiv(e){
    document.getElementById("myDiv").classList.remove("show");
    document.getElementById("myDiv").classList.add("hide");
}

document.addEventListener("mousemove", (e)=>{
    showMyDiv(e);
});