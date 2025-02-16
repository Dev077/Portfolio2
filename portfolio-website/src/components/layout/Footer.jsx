const Footer = () => {
    return (
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center font-mono text-sm">
            <div className="flex items-center gap-4">
              <span className="text-accent">v1.0.0</span>
              <span>LAST UPDATED 2024-11-06</span>
            </div>
            <div className="flex gap-6">
              <a href="https://linkedin.com" className="hover:text-accent">LinkedIn¹</a>
              <a href="https://instagram.com" className="hover:text-accent">Instagram²</a>
              <a href="https://twitter.com" className="hover:text-accent">Twitter³</a>
              <Link to="/reading" className="hover:text-accent">Reading⁴</Link>
            </div>
            <div className="text-right">
              <div>Let's build something together.</div>
              <div className="text-accent">your.email@gmail.com⁵</div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Layout;