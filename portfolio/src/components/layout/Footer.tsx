import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-6 border-t border-dashed border-gray-800">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-sm">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="px-3 py-1 rounded-full text-black bg-[#F1C40F] mr-4">v1.0.0</span>
          <span className="text-gray-400">LAST UPDATED {new Date().toISOString().split('T')[0]}</span>
        </div>
        
        <div className="mb-4 md:mb-0">
          <ul>
            <li>
              <Link href="https://linkedin.com" className="hover:text-[#F1C40F] transition-colors">
                LinkedIn<sup>1</sup>
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com" className="hover:text-[#F1C40F] transition-colors">
                Instagram<sup>2</sup>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" className="hover:text-[#F1C40F] transition-colors">
                Twitter<sup>3</sup>
              </Link>
            </li>
            <li>
              <Link href="/reading" className="hover:text-[#F1C40F] transition-colors">
                Reading<sup>4</sup>
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="text-right">
          <p className="mb-1">Let's build something together.</p>
          <Link href="mailto:your.email@gmail.com" className="hover:text-[#F1C40F] transition-colors">
            your.email@gmail.com<sup>5</sup>
          </Link>
        </div>
      </div>
    </footer>
  );
}