import { baseurl } from "./baseurl.js"

 const addQueastion = async (questiondata) =>{
    try{
        const res  = await fetch(`${baseurl}/questions`,{
           method:"POST",
           headers:{
            "content-type":"application/json"
           },
           body:JSON.stringify(questiondata) 
        })
        const data  = await res.json();
        return data.success
    }catch(err){
        console.log(err)
    }

 };
 