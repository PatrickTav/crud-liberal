import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import DetailsUser from '../../components/DetailsUser'




export async function getServerSideProps(context){
  const {params} = context

  const data = await fetch(`http://localhost:8080/users/${params.userId}`)
  const user = await data.json()

  return {
    props:{user}
  }
}

export default function user  ({user})  {
  
 
  

  const router = useRouter()
  const {userId}= router.query


 
  return (
    <div className='h-screen bg-slate-600'>
      
        {user&&user.map(({id_user,name_user,cpf_user,workcard_user ,sector_user,phones_user})=>(
          <DetailsUser
              key={id_user}
              name={name_user}
              cpf={cpf_user}
              sector={sector_user}
              workCard={workcard_user}
              phone={phones_user}
          />
        ))}
      <div className='ml-4'>
        <button className='w-20 p-1 mr-4 text-white bg-orange-700 rounded-md'>Editar</button>
        <button className='w-20 p-1 text-white bg-red-600 rounded-md'>Excluir</button>
      </div> 

      
     
    </div>
  )
}






