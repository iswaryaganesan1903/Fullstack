const welcome=()=>{
    const userName= document.getElementById("name").value;
    const message=document.getElementById("message").innerText="welcome "+ userName;
    console.log(message)
    
}