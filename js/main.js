function showMyDiv(e){     
    let x =  e.pageX;
    let y = e.pageY;
    //let bg = e.style.backgroundColor;
    
    document.getElementById("myDiv").style.top = y - 5 + "px";
    document.getElementById("myDiv").style.left = x - 5 + "px";
    //document.getElementById("myDiv").style.backgroundColor = `${bg}`;
}

function show(elem){
  document.getElementById("myDiv").classList.remove("hide");
    console.log(elem.style);
}

function hideMyDiv(e){
    document.getElementById("myDiv").classList.remove("show");
    document.getElementById("myDiv").classList.add("hide");
}

document.addEventListener("mousemove", (e)=>{
    showMyDiv(e);
});