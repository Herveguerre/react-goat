import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Contact() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState("+0");
  const handleClick = ()=>{
    alert("message envoyer")
  }
  return (

  <div className='  text-end text-2xl text-white  '>
      <div className='bg-gray-950' ><Header />
      </div>
      <div className='p-40 h-[850px]  bg-slate-500 w-full  space-x-5 gap-4 border-solid  justify-center  '>
      .

      {
            show !== true && (<p>But you're good, Marty, you're really good. And this audition tape of your is great, you gotta send it in to the record company. It's like Doc's always saying. Oh, what I meant to day was- I got enough practical jokes for one evening. Good night, fut</p>)
          }
        <div className='p-2 pt-10'>
          <label  for="prenom">Premon </label>
          <input className='border-solid text-black border-black mb-5' type="text" class="form-control" id="nom" name="nom" required></input>
        </div>
        <div className='p-2'> 
          <label  for="adresse">Adresse </label>
          <input className='border-black mb-5 text-black' type="text" class="form-control" id="nom" name="nom" required></input>
        </div>
        <div className='p-2'> 
          <label  for="code postal">Code postal </label>
            <input className='border-black text-black mb-5' type="text" class="form-control" id="nom" name="nom" required></input>
        </div>
        <div className='p-2'> 
          <label  for="email">Email </label>
          <input className='border-black text-black mb-5' type="text" class="form-control" id="nom" name="nom" required></input>
        </div>
        <div className='p-2 space-x-10 '> 
          <button onClick={handleClick} className='border-black  mb-5' for="submit">envoyer</button>
          <button onClick={setShow} className='border-black  mb-5' for="submit">voir plus</button>
        </div><p>likes: {count}</p>
          
      </div>
          
        



      
    <div className='bg-gray-950' ><Footer/></div>
    
  </div>
  )
}
