import { Link } from 'react-router-dom';
import './Navbar.styles.scss';

export default function Navbar() {
  return (
    <nav>
      <Link className='navLink' to='/'>
        Homepage
      </Link>
      <Link className='navLink' to='/order'>
        Order Summary
      </Link>
    </nav>
  );
}
