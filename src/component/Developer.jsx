import React, { useRef } from 'react';
import Almas from '../assets/Almas.jpg';
import emailjs from '@emailjs/browser';
import Soc3 from '../assets/Soc3.jpg';
import Soc2 from '../assets/Soc2.jpg';
import Soc1 from '../assets/Soc1.png';

const Developer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_38znrfu', 'template_7od855f', form.current, {
        publicKey: 'P_2P6AfRqaD22IOwt',
      })
      .then(
        () => {
          window.alert('SUCCESS! Message sent');
        },
        (error) => {
          window.alert('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='bg-slate-200'>
      <section className='text-black text-center py-16' id='about'>
        <div className='mt-10'>
          <img
            src={Almas}
            alt="Yusuf Rodiah Hadizah"
            className='mx-auto mb-8 w-32 h-32 rounded-full object-cover transition-transform duration-300 hover:scale-105'
          />
          <h1 className='text-4xl font-bold'>
            I'm <span className='text-black'>Yusuf Rodiah Hadizah</span>, Front-end Developer
          </h1>
          <p className='mt-4 mb-5 text-lg text-gray-600 px-4'>
            Undergraduate Student of University of Ilorin, Zoology Department, Faculty of Life Sciences.
          </p>
          <div className='flex flex-row md:flex-row items-center justify-center'>
            <a
              href="https://docs.google.com/document/d/1RilV56pTzrDKzdUYXLVXio2wTN6OEnJN5rsezgMSpBA/edit?usp=drivesdk"
              className='font-bold bg-gradient-to-r from-slate-200 to-stone-500 text-black mx-2 mb-2 md:mb-0 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
              download
            >
              Resume
            </a>
            <a
              href='#contact'
              className='font-bold bg-gradient-to-r from-stone-500 to-slate-200 text-black mx-2 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
            >
              Contact me
            </a>
          </div>
        </div>
      </section>

      <section className='text-black flex flex-col justify-center md:mr-20 bg-slate-100 text-center py-10' id='contact'>
        <h2 className='text-4xl font-bold text-black mb-4'>Let's Talk</h2>
        <p className='font-bold text-gray-700 mb-4'>
          Connect with me, let's collaborate and work together on your next project.
        </p>
        <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-slate-800 mb-4'>Contact</h2>
        <div className='flex flex-wrap justify-center md:justify-between md:space-x-12 p-10'>
          <div className='md:m-5  flex flex-col items-center '>
            <a href="mailto:hadizahrodiah@gmail.com" className='inline-block text-yellow-300 mb-2'>
              <img src={Soc3} className='w-12 h-12 bg-white rounded-full transition-transform duration-300 hover:scale-110' alt="Email Icon" />
            </a>
            <p className='hidden md:inline'>Email</p>
          </div>
          <div className='md:m-5 flex flex-col items-center'>
            <a href="https://wa.me/message/OXFRWM6MUANGE1" className='inline-block text-white mb-2'>
              <img src={Soc1} className='w-12 h-12 bg-white rounded-full transition-transform duration-300 hover:scale-110' alt="WhatsApp Icon" />
            </a>
            <p className='hidden md:inline'>WhatsApp</p>
          </div>
          <div className='md:m-5  flex flex-col items-center'>
            <a href="https://www.linkedin.com/in/rodiah-hadizah" className='inline-block text-white mb-2'>
              <img src={Soc2} className='w-12 h-12 bg-white rounded-full transition-transform duration-300 hover:scale-110' alt="LinkedIn Icon" />
            </a>
            <p className='hidden md:inline'>LinkedIn</p>
          </div>
        </div>

        <div className='font-bold p-10'>
          <form ref={form} onSubmit={sendEmail} className='bg-white p-6 rounded-lg shadow-md'>
            <label htmlFor='name' className='block mb-2'>Name</label>
            <input
              type='text'
              placeholder='Enter your name'
              name='from_name'
              className='w-full p-2 mb-4 rounded border border-slate-600 focus:outline-none focus:border-stone-400'
              required
            />
            <label htmlFor='email' className='block mb-2'>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              name='from_email'
              className='w-full p-2 mb-4 rounded border border-slate-600 focus:outline-none focus:border-stone-400'
              required
            />
            <label htmlFor='message' className='block mb-2'>Message</label>
            <textarea
              name='message'
              rows='5'
              className='w-full p-2 mb-4 rounded border border-slate-600 focus:outline-none focus:border-stone-400'
              placeholder='Enter your message'
              required
            ></textarea>
            <button
              type='submit'
              className='font-bold bg-gradient-to-r from-stone-500 to-slate-50 text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full w-full'
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Developer;
