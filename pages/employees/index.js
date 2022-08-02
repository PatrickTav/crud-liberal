import React from 'react'
import CardUser from '../../components/cardUser'
import Link from "next/link"

export async function getStaticProps() {
  const res = await fetch('http://localhost:8080/users')
  const data = await res.json()
  return {
    props: { data },
  }
}

export default function employess({ data }) {
  return (
    <div className='h-screen bg-slate-600'>
      {data.map((user) => (
        <Link href={`/employees/${user.id_user}`}>
          <a >
            <CardUser
              key={user.id_user}
              name={user.name_user}
              cpf={user.cpf_user}
              sector={user.sector_user}
            />
          </a>
        </Link>
      ))}
    </div>
  )
}
