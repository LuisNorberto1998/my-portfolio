import './Header.css'
import Link from 'next/link';


const Header: React.FC = () => (
  <header className="header-container">
    <nav>
      <ul className="ul-header">
        <li><Link href="#inicio" className="hover:underline">Inicio</Link></li>
        <li><Link href="#tecnologias" className="hover:underline">Tecnologías</Link></li>
        <li><Link href="#proyectos" className="hover:underline">Proyectos</Link></li>
        <li><Link href="#social" className="hover:underline">Social</Link></li>
        <li><Link href="#contacto" className="hover:underline">Contacto</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;