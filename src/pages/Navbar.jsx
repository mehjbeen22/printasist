import PrintIcon from '@mui/icons-material/Print';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <ul className="flex items-center justify-between text-blue-800">
        <Link to="/" className="flex items-center space-x-2">
          <PrintIcon className="text-blue-800 " sx={{ fontSize: "2rem" }} />
          <h2 className="text-2xl font-bold">Printasist</h2>
        </Link>
        <div className="flex space-x-8">
          <Link to="/printeroffline" className="hover:text-blue-600 transition duration-300">
            Printer Offline
          </Link>
          <Link
            to="/printersetup"
            className="hover:text-blue-600 transition duration-300"
          >
            Printer Setup
          </Link>
          <Link to="/scannersetup" className="hover:text-blue-600 transition duration-300">
            Scanner Setup
          </Link>
          <Link to="/privacypolicy" className="hover:text-blue-600 transition duration-300">
            Privacy Policy
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
