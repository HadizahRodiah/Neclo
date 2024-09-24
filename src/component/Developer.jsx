import React from 'react'
import Almas from '../assets/Almas.jpg'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Soc1 from '../assets/soc1.png'
import Soc2 from '../assets/Soc2.jpg'
import Soc3 from '../assets/Soc3.jpg'

const Developer=()=>{

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_38znrfu', 'template_7od855f', form.current, {
        publicKey: 'P_2P6AfRqaD22IOwt',
      })
      .then(
        () => {
          window.alert('SUCCESS! message sent');
        },
        (error) => {
         window.alert('FAILED...', error.text);
        },
      );
  };

    return(
      <div className='bg-slate-200'>     
       <div className='text-black  bg-slate-200 text-center py-16' id="about">
        <div className='mt-10'>
            <img src={Almas} alt=""  className='mx-auto mb-50 w-32 h-30 rounded-full object-cover transform-transition-transform duration-300 hover:scale-105'/>
            <h1 className='text-4xl font-bold'>I'm{" "}
              <span className='text-black'>Yusuf Rodiah Hadizah</span>
                ,Front-end Developer
            </h1>
            <p className='mt-4 mb-5 text-lg text-black-500 px-4'>
            Undergraduate Student of University of Ilorin, Zoology Department,
            Faculty of Life Sciences.
            </p>
            <div>
                <a href="https://docs.google.com/document/d/1RilV56pTzrDKzdUYXLVXio2wTN6OEnJN5rsezgMSpBA/edit?usp=drivesdk" className=' font-bold bg-gradient-to-r from-slate-200 to-stone-500 text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' download>Resume</a>
                <a href='#contact' className='font-bold bg-gradient-to-r from-stone-500 to-slate-200 text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact me</a>
            </div>
        </div>
        </div>
 
    <div className='text-black mt-20 mb-10 bg-slate-100 text-center py-4' id="contact">    
         <div className='flex-1 flex flex-col'>
         <h2 className='text-4xl font-bold text-black mb-4'> Let's Talk</h2>
        <p className='font-bold text-black'>Connect with me let's, collaborate and Work together on your next project</p>
    <h2 className='text-4xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-black to-slate-800 mb-4'>Contact</h2>
    <div className='flex flex-row md:flex-row item
    s-center md:space-x-12 p-10  justify-between' >
        <div className='mb-4 mt-8 font-bold tex-black flex flex-col'>
        <a href="hadizahrodiah@gmail.com" className='inline-block text-yellow-300 mr-2'><img src={Soc3} className='w-12 h-15 bg-white rounded-full'/></a>
        <p>Email</p>
        </div>
        <div className='mb-4 mt-8 font-bold flex flex-col'>
        <a href="https://wa.me/message/OXFRWM6MUANGE1  " className='inline-block text-white mr-2 '><img src={Soc2} className='w-12 h-15 bg-white  rounded-full'/></a>
        <p className='mr-2'>WhatsAPP</p>
        </div>
        <div className='mb-4 mt-8 font-bold flex flex-col'>
        <a href="https://www.linkedin.com/in/rodiah-hadizah" className='inline-block text-white mr-2 '><img src={Soc1} className='w-12 h-15 rounded-full '/> </a>
        <p className='mr-2'>Linkedin</p>
        </div>
      </div>

      <div className='font-bold p-10  items-center'>
        <form ref={form} onSubmit={sendEmail}>
      <label htmlFor='Name' className='block mb-2'>Name</label>
      <input type='text' placeholder='Enter your name' name='from_name' className='w-full p-2 rounded bg-white border border-slate-600 focus:outline-none focus:border-stone-400'></input>  
      <label htmlFor='Email' className='block mb-2'>Email</label>
      <input type='text' placeholder='Enter your Email' name='from_email' className='w-full p-2 rounded bg-white border border-slate-600 focus:outline-none focus:border-stone-400'></input>  
      <label htmlFor='Text' className='block mb-2'name='message'>Message</label>
      <textarea type='text' rows='5' className='w-full p-2 rounded bg-white border border-black focus:outline-none focus:border-stone-400' placeholder='Enter your message'></textarea>
      <button type='submit' value='Send'className='font-bold bg-gradient-to-r from-stone-500 to-slate-50 text-black hidden
       md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Send</button>
          </form>  
      </div>
  
        </div>
        </div>
</div>
    )
}

export default Developer