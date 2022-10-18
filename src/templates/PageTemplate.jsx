import { NavbarMobile } from "../components/navbarMobile/NavbarMobile";
import { NavbarDesktop } from "../components/navbarDesktop/Navbar";
import "./pageTemplate.css";


const PageTemplate = (props) => {
  return (
    <div className="PageTemplate">
      <NavbarDesktop />
      <NavbarMobile />
      <div className="Content">{props.children}</div>
    </div>
  );
};

export default PageTemplate;
