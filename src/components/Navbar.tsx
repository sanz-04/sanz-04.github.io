import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';

  return (
    <nav className="fixed w-full z-50 bg-cream/90 backdrop-blur-md border-b border-coffee/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-heading text-2xl font-bold tracking-tight text-coffee">
            The Morning Hub
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-caramel transition-colors">Home</Link>
          {!isMenuPage && (
            <>
              <a href="#about" className="hover:text-caramel transition-colors">About</a>
              <a href="#gallery" className="hover:text-caramel transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-caramel transition-colors">Contact</a>
            </>
          )}
          <Link to="/menu" className="hover:text-caramel transition-colors">Menu</Link>
        </div>
        <a
          href="https://wa.me/1234567890"
          className="bg-coffee text-cream px-6 py-2.5 rounded-full font-semibold hover:bg-caramel transition-all duration-300 shadow-lg"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
