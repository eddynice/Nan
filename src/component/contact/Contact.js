
    import React from 'react';
import { useForm } from 'react-hook-form';
import  "./contact.css"

export default function Contact() {
  //const { register, handleSubmit, formState: { errors } } = useForm();
  //const onSubmit = data => console.log(data);
  //console.log(errors);
  
  return (
    <div><h1 style={{fontSize:"4em"}}>Get In Contact</h1>
<div className="contactPage">
  <div className="left">
  <div className="info">
    <p>I enjoy creating products that help the world become a better place.</p>
    <p>We can do so much together. Let's talk.</p>
   <p>Email: adekaeatwork@gmail.com
</p> 
<p>Tel: +234-906-028-9026</p> 
<p>My Instagram Pages</p>
<p>My Tech Page: @tech.saya</p>
<p>My Design Page: @design.by.saya</p>

  </div>

  </div>
  <div className="right">
    <form className="form">
      <div className="formControl">
        <input type="text" name="name" placeholder='fullName'/> 
      </div>
      <div className="formControl">
        <input type="text" name="name"  placeholder='fullName'/>
      </div>
      <div className="formControl">
        <input type="text" name="name" placeholder='fullName'/>
      </div>
      <textarea name="Messages" id="" cols="60"  rows="10" className="textArea"></textarea>
      <input type="submit" name="name" className="button" />
    </form>
   
  </div>
  </div>
</div>
     
  );
}
