import React, { useState } from 'react'

const Form = () => {
  const [user, setUser] = useState({
    cpf: '',
    name: '',
    workCard: '',
    sector: '',
    phone:'',
  })
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    // console.log(user)
   
  }

  const handleChange = ({ target }) => {
    setUser((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  // console.log(user)
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center m-auto text-white w-min ">
        <label className='py-1.5 '>
          CPF:
          <input className='text-black' type="number" name="cpf" required onChange={handleChange} />
        </label>
        <label className='py-1.5'>
          Nome:
          <input className='text-black'type="text" name="name" required onChange={handleChange} />
        </label>
        <label className='py-1.5'>
          PIS/PASEP
          <input
            type="number"
            name="workCard"
            required
            onChange={handleChange}
            className='text-black'
          />
        </label>
        <label className='py-1.5'>
          Setor:
          <input  className='text-black' type="text" name="sector" required onChange={handleChange} />
        </label>
        <label className='py-1.5'>
          Telefones:
          <input className='text-black' type="number" name="phone" required onChange={handleChange} />
        </label>
        <button className='p-2 mt-5 rounded-md bg-sky-600'>Cadastrar</button>
      </form>
    </>
  )
}

export default Form
