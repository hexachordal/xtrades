import './sidebar.css';
import Sidemenu from './sidemenu';
import logo from './xtradeLogo.svg';
import logoOne from './Alert image/Group 7137.svg'

function Sidebar() {
  const menuItems=[
    ["Alerts",
    {logoOne}],
    ["Leaderboard",
    {logoOne}],
    ["Xhub",
    {logoOne}]
    ]
  return (
    <div className="sidebar">
      <img
      className="logo"
    src={logo}
    alt="xtrade logo"
    />
    <Sidemenu menu={menuItems}/>
    </div>
    
  );
}

export default Sidebar;
