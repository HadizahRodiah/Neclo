import React from 'react'
import Logo from '../assets/Logo.jpg'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className='bg-slate-500 text-white px-8 w-full md:px-16 lg:fixed '>
   <div className='container py-2 flex justify-center md:justify-between item-center'>
    <div className='space-x-12 font-bold'>
     <div className='flex flex-row justify-between'>  
     <h1 className='text-white text-4xl mt-2  font-bold'>NECLO</h1>   
    <ul>
        <li> <Link to="/"><a className='font-bold mx-3 bg-gradient-to-r from-stone-500 to-slate-50 text-black hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' href="">Health</a></Link></li>
        <li>
            <a className='font-bold mx-3 bg-gradient-to-r from-stone-500 to-slate-50 text-black hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' href=''>Continent</a>
            <ul className="dropdown flex space-y-2">
                <li><Link to="/Africa"> <a className='font-bold mr-1 bg-slate-200 text-black hidden md:inline
     transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg' href="">Africa</a></Link></li>              
                <li><Link to="/Europe"><a className='font-bold  bg-white text-black hidden md:inline
     transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg' href="">Europe</a></Link></li>
                
                <li><Link to="/Asia"><a className='font-bold mr-2 bg-slate-200 text-black hidden md:inline
     transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg' href="">Asia</a></Link></li>
      </ul>
     </li>
     <li><Link to="/Sport"><a className='font-bold mx-3 bg-gradient-to-r from-stone-500 to-slate-50 text-black hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' href=""> Sport</a>
        </Link> </li>
          <li><Link to="/Fashion"><a className='font-bold mx-3 bg-gradient-to-r from-stone-500 to-slate-50 text-black hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' href="">Fashion</a></Link></li>
     <li><Link to="/Religion"><a className='font-bold mx-6 bg-gradient-to-r from-stone-500 to-slate-50 text-black hidden md:inline
     transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' href="">Religion</a>
    </Link> </li>
     <li><Link to="/Developer"><a className='font-bold mx-3 bg-gradient-to-r from-stone-500 to-slate-50 text-black hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' href="">Contact</a></Link>
      </li>                   
</ul>
</div>
</div>
    </div>
</nav>
  )
}

export default Navbar