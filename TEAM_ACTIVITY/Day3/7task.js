const login=()=>{
    const name=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
     if (name==="admin" && pass==="12345"){
        document.getElementById("result").innerText="login Sucess";

     }
     else{
        document.getElementById("result").innerHTML="login Failed"
     }
}