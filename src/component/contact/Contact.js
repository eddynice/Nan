
    import React from 'react';
import { useForm } from 'react-hook-form';
import classes from "./contact.module.css"

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h2>hello world</h2>

      </div>


      <div className={classes.right}>
        <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.text}>
      <input type="text" placeholder="Name" className="" {...register("Name", {})} />
      </div>
      <div className={classes.email}>
      <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      </div>
      <div className={classes.subject}>
     
      <input type="text" placeholder="Subject" {...register("Subject", {required: true})} />
      </div>
      <div className={classes.message}>
      <textarea type="textarea" placeholder="Message" {...register("Message", {})} />
      </div>
      <input type="submit" />
    </form>
      </div>
   
    
    
    </div>
  );
}
