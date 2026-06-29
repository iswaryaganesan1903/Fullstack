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
const count=()=>{
myHead=document.getElementById("head")
let charCount=0
const usernames=document.getElementById("userName").value
for(let i=0;i<database.length;i++){
   charCount=database[i].length
}
myHead.innerText=charCount
}