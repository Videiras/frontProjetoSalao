import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-[#B8A29A] text-white">
      <nav className="h-[64px] px-16 flex items-center content">
        <ul className="flex gap-5 w-full">
          <li><Link to="/home" className="text-2xl hover:opacity-25 duration-500 ">Início</Link></li>
          <li><Link to="/admin" className="text-2xl hover:opacity-25 duration-500">Gerencial</Link></li>
          <li><Link to="/finances" className="text-2xl hover:opacity-25 duration-500">Financeiro</Link></li>
          <li><Link to="/stock" className="text-2xl hover:opacity-25 duration-500">Estoque</Link></li>
          <li><Link to="/dates" className="text-2xl hover:opacity-25 duration-500">Agenda</Link></li>
          <li className="ml-auto"><Link to="/logout" className="text-2xl hover:opacity-25 duration-500 text-red-600">Sair</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;