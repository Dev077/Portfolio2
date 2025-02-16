import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 w-full bg-space-black/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-sans text-xl font-bold">
            Your Name
          </Link>
          <div className="flex gap-6 font-mono text-sm">
            <Link to="/projects" className="hover:text-accent transition-colors">
              Projects
            </Link>
            <Link to="/reading" className="hover:text-accent transition-colors">
              Reading
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};