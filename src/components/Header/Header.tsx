import Link from 'next/link';

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav>
      <ul className="flex space-x-4">
        <li><Link href="#home" className="hover:underline">Inicio</Link></li>
        <li><Link href="#technologies" className="hover:underline">Tecnologías</Link></li>
        <li><Link href="#projects" className="hover:underline">Proyectos</Link></li>
        <li><Link href="#social" className="hover:underline">Social</Link></li>
        <li><Link href="#contact" className="hover:underline">Contacto</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;