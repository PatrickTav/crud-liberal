import Head from 'next/head'


import Form from "../components/Form"

export default function Home() {
  return (
   <div className='container h-screen max-w-full bg-slate-600'>
   <Head>
    <title>
      Cadastro de Funcionários - Liberal
    </title>
   </Head>
   
     <div className='container h-screen max-w-full font-bold bg-slate-600'>
        <h1 className='text-xl font-bold text-center text-slate-200'>Cadastro de Funcionários</h1>
        <Form/>
      </div>   
   </div>
  )
}
