import React,{useState} from 'react';
import  "./contact.css";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";






export default function Contact() {
let history = useNavigate();


  //const [loading, setloading] = useState(true)
  // const location = useLocation()
 
 const [status, setStatus] = useState(undefined);


  const [toSend, setTosend] = useState({from_name:"",
  email:"",number:"",message:"",
})






const onSubmit =(e) => {
  e.preventDefault()
 // history('/');
 
  setTosend({
    from_name:"",
    email:"",number:"",message:"",
  })
  emailjs.send("service_0teafvs","template_z08gfgv",toSend,"arzK141-u7gAHVTUG")
  .then((response)=>{
    console.log("Sucess", response.status, response.text);
     setStatus({ type: 'success', });
      history('/');
  })
  .catch((err)=>{
    console.log("Failed", err);
     setStatus({ type: 'error', });
     history('/contact');
  })
}

 const handleChange = (e)=>{
  setTosend({ ...toSend, [e.target.name]: e.target.value})
 }
  
  return (
    <div><h1 style={{fontSize:"4em"}}>Get In Contact</h1>
<div className="contactPage">
  <div className="left">
  <div className="info">
    <p>I enjoy creating products that help the world become a better place.</p>
    <p>We can do so much together. Let's talk.</p>
   <p>Email: osareniyeosazee@gmail.com
</p> 
<p>Tel: +234-81-179-43552</p> 
<p>My Instagram Pages</p>
<p>My Tech Page: @</p>


  </div>

  </div>
  <div className="right">
    <form onSubmit={onSubmit}   className="form">
      <div className="formContrl">
        <input type="text" name="from_name" required value={toSend.from_name} onChange={handleChange} placeholder='fullName'/> 
      </div>
      <div className="formControl">
        <input type="email" name="email"  placeholder='email' value={toSend.email} onChange={handleChange} />
      </div>
      <div className="formControl">
        <input type="number" name="number" required placeholder='number' value={toSend.number} onChange={handleChange}/>
      </div>
      <textarea name="message" id="" cols="60"   rows="10" required placeholder='comment' className="textArea"  value={toSend.message} onChange={handleChange}></textarea>
      <input type="submit" name="name" className="button" />
    </form>
  
    {status?.type === 'success' && alert(" Successful")}
      {status?.type === 'error' && (
       alert("message not successfull") 
      )}
   
  </div>
  </div>
</div>
     
  );
}
