import './sidebar.css';
import logo from './xtradeLogo.svg';

function Sidebar() {
  return (
    <div className="sidebar">
      <img
      className="logo"
    src={logo}
    alt="xtrade logo"
    />
    </div>
  );
}

export default Sidebar;
