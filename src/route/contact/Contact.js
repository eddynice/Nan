import React,{useState} from 'react';
import  "./contact.css";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";
import {toastSuccessNotify,toastErrorNotify} from '../../helpers/ToastNotify';
import {contacts} from "../../data"


export default function Contact() {
let history = useNavigate();

  const [toSend, setTosend] = useState({from_name:"",
  email:"",number:"",message:"",
})

const onSubmit =(e) => {
  e.preventDefault()
  setTosend({
    from_name:"",
    email:"",number:"",message:"",
  })
  emailjs.send("service_0teafvs","template_z08gfgv",toSend,"arzK141-u7gAHVTUG")
  .then((response)=>{
    //console.log("Sucess", response.status, response.text);
     //setStatus({ type: 'success', });
     toastSuccessNotify("message sent successful")
      history('/');
  })
  .catch((err)=>{
    //console.log("Failed", err);
     //setStatus({ type: 'error', });
     history('/contact');
     toastErrorNotify("message not sent, Try again")
  })
}

 const handleChange = (e)=>{
  setTosend({ ...toSend, [e.target.name]: e.target.value})
 }
  
  return (
    <div>

      <h1 style={{fontSize:"4em"}}>Get In Contact</h1>

<div className="contactPage">
  <div className="left">
{contacts.map((contact, index)=>(
  <div key={index} className="info">
    <p>{contact.p1}</p>
    <p>{contact.p2}</p>
   <p>{contact.p3}
</p> 
<p>{contact.p4}</p> 
<p>{contact.p5}</p>
<p>{contact.p6}</p>
  </div>
  ))}

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
  </div>
  </div>
</div>
     
  );
}
