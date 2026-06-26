const database=[]
const rigisterData=(e)=>{
e.preventDefault()
const username=document.getElementById("userName").value
const useremail=document.getElementById("userEmail").value
const userpassword=document.getElementById("userPassword").value
const userDatas = {username,useremail,userpassword}
database.push(userDatas)
console.log(database);

}