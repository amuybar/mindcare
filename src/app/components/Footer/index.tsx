import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo or Site Title */}
          <div className="text-2xl font-bold">
            MindCare
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-sky-400">Home</a></li>
              <li><a href="#" className="hover:text-sky-400">Resources</a></li>
              <li><a href="#" className="hover:text-sky-400">Services</a></li>
              <li><a href="#" className="hover:text-sky-400">Contact</a></li>
              <li><a href="#" className="hover:text-sky-400">Blog</a></li>
              <li><a href="#" className="hover:text-sky-400">About Us</a></li>
              <li><a href="#" className="hover:text-sky-400">Community</a></li>
              <li><a href="#" className="hover:text-sky-400">Support Group</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Contacts</h3>
            <p>254 MindCare Street,</p>
            <p>Nairobi, XYZ 45678</p>
            <p>Email: info@mindcare.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Social Media Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-sky-400">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
