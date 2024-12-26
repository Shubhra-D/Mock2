import { baseurl } from "./baseurl.js";

const myserver = {
    login:(email,password)=>{
       if(email=="empher@gmail.com" && password==="empher@123"){
        return true;
       }
       return  false;
    }
};


//alert tags etc
document.getElementById("login-form").addEventListener("submit",function(){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
     if(myserver.login(email,password)){
        alert("Login Success.....")
        window.location.href="quiz.html"
     }else{
        alert("Invalid Credentials")
     }
})
