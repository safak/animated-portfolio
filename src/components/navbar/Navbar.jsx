import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <div className='wrapper'>
        <span>Steve Crabtree</span>
        <div className='social'>
          <a href='#'>
            <img src='/facebook.png' alt=''></img>
          </a>
          <a href='#'>
            <img src='/instagram.png' alt=''></img>
          </a>
          <a href='#'>
            <img src='/youtube.png' alt=''></img>
          </a>
          <a href='#'>
            <img src='/dribbble.png' alt=''></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
