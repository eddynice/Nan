
    import React,{useState} from 'react';
//import { useForm } from 'react-hook-form';
import  "./contact.css"

export default function Contact() {
  //const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [toSend, setTosend] = useState({name:"",
email:"",number:"",message:"",
})
const onSubmit =(e) => {
  e.preventDefault()
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
        <input type="text" name="name" value={toSend.name} onChange={handleChange} placeholder='fullName'/> 
      </div>
      <div className="formControl">
        <input type="email" name="email"  placeholder='email' value={toSend.email} onChange={handleChange} />
      </div>
      <div className="formControl">
        <input type="number" name="number" placeholder='number' value={toSend.number} onChange={handleChange}/>
      </div>
      <textarea name="Message" id="" cols="60"  rows="10" placeholder='comment' className="textArea"  value={toSend.message} onChange={handleChange}></textarea>
      <input type="submit" name="name" className="button" />
    </form>
   
  </div>
  </div>
</div>
     
  );
}
