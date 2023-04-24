import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Contact() {
  return (
    <div className='  text-center  text-2xl text-white '>Contact
    <Header />
    <div className='p-40 h-[650px]  bg-slate-500 w-full  space-x-5 gap-4 border-solid  justify-center '>
        <div className='p-2'>
          <label  for="prenom">Premon</label>
          <input className='border-solid border-black mb-5' type="text" class="form-control" id="nom" name="nom" required></input>
        </div>
        <div className='p-2'> 
          <label  for="adresse">Adresse</label>
          <input className='border-black mb-5' type="text" class="form-control" id="nom" name="nom" required></input>
        </div>
        <div className='p-2'> 
          <label  for="code postal">Code postal</label>
            <input className='border-black mb-5' type="text" class="form-control" id="nom" name="nom" required></input>
        </div>
        <div className='p-2'> 
          <label  for="email">Email</label>
          <input className='border-black mb-5' type="text" class="form-control" id="nom" name="nom" required></input>
        </div>
          


        



    </div>
    <Footer/>
    
    </div>
  )
}
