import { Link } from 'react-router-dom';

import SearchOrder from '../features/order/SearchOrder';

const Header = () => {
  return (
    <header>
      <Link to='/'>Fast React Pizza</Link>
      <SearchOrder />
      <p>Name</p>
    </header>
  );
};

export default Header;
