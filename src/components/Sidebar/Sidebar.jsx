import ToggleButton from './ToggleButton/ToggleButton';
import Links from './Links/Links';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='bg'>
        <Links />
      </div>
      <ToggleButton />
    </div>
  );
};

export default Sidebar;
