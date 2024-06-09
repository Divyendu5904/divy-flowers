


function find(){
    let a=document.getElementById("t1").value
    let b=document.getElementById("t2").value
    if(a==="divyendu" || a==="samu"){
        if(b==="kumar"|| b==="thakur")
        {
            alert("verified")
        }
        else{
            alert("incorrect password")
        }

    }
    else{
        alert("User does not exist")
    }
}

