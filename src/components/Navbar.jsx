const Navbar = () => {
  return (
    <nav className="fixed w-full h-16 flex justify-between items-center px-6 bg-[#0a192f] shadow-md z-50">
      <h1 className="text-2xl font-bold text-teal-400">Thanarat Srihapol</h1>
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        <li className="hover:text-teal-400 cursor-pointer">Home</li>
        <li className="hover:text-teal-400 cursor-pointer">About</li>
        <li className="hover:text-teal-400 cursor-pointer">Skills</li>
        <li className="hover:text-teal-400 cursor-pointer">Projects</li>
        <li className="hover:text-teal-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;