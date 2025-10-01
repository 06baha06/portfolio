export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Baha Yıldız</h1>
      <ul className="flex space-x-6">
        <li><a href="#projects" className="hover:text-blue-400">Projeler</a></li>
        <li><a href="#about" className="hover:text-blue-400">Hakkımda</a></li>
        <li><a href="#contact" className="hover:text-blue-400">İletişim</a></li>
      </ul>
    </nav>
  );
}