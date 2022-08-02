import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="flex max-w-full p-2 text-white table-fixed  bg-sky-900">
      <div className="mr-5">
        <Link href="/">
          <a>Cadastrar</a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/employees">
            <a>Funcionários</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
