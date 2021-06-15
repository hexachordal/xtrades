import './sidebar.css';
import logoOne from './Alert image/Group 7137.svg'

function Sidemenu(props) {
    const menu = props.menu;
    const menuItems = menu.map((item) =>
        <div class="menu" div={item[0]}><img
        className="logo"
      src={logoOne}
      alt="xtrade logo"
      />{item[0]}</div>
    );
  return (
    <div className="sidemenu">
      {menuItems}
    </div>
  );
}

export default Sidemenu;
