import { useNavigate } from "react-router-dom";
import type { Location } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import './Sidebar.css'
import { LocationContext } from '../location/LocationContext';
import { 
  Tab,
  TabList,
} from "@fluentui/react-components";
import { 
  Home20Filled,
  Home20Regular,
  QuestionCircle20Filled,
  QuestionCircle20Regular,
} from "@fluentui/react-icons";
const Sidebar = () => {
  const location = useContext(LocationContext) as Location;
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const width = window.screen.width;
  const minWidth = Math.round(width * 0.7);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    const style = document.createElement('style');
    document.head.appendChild(style);

    if (style.sheet) {
      style.sheet.insertRule(`
        @media (max-width: ${minWidth}px) {
          .sidebar-tablist .tab-text {
            display: none;
          }
          .sidebar {
            width: 5dvw;
            padding-left: 1dvw !important;
            padding-right: 1dvw !important;
          }
          .sidebar-badge {
            height: 2.9dvw !important;
            padding-top: 0.5dvw !important;
          }
        }
      `, style.sheet.cssRules.length);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.head.removeChild(style);
    };
  }, [minWidth]);

  const HomeIcon = location.pathname === "/home" ? Home20Filled : Home20Regular;
  const HelpIcon = location.pathname === "/help" ? QuestionCircle20Filled : QuestionCircle20Regular;

  const handleClick = (path: string) => {
    navigate(path);
  };

  const renderTabs = () => {
    
    return (
      <>
        <Tab
          icon={windowWidth > minWidth ? <HomeIcon /> : <HomeIcon style={{ marginRight: '5px' }} />}
          value="home"
          onClick={() => handleClick("/home")}
          className={location.pathname === "/home" ? "sidebar-active-tab" : ""}
        >
          <span className="tab-text">{windowWidth > minWidth && "Home"}</span>
        </Tab>
        <Tab
          icon={windowWidth > minWidth ? <HelpIcon /> : <HelpIcon style={{ marginRight: '5px' }} />}
          value="help"
          onClick={() => handleClick("/help")}
          className={location.pathname === "/help" ? "sidebar-active-tab" : ""}
        >
          <span className="tab-text">{windowWidth > minWidth && "Help"}</span>
        </Tab>
      </>
    );
  };

  return (
    <div className="sidebar">
      <TabList 
        vertical appearance="subtle" 
        selectedValue={location.pathname.slice(1)}
        className="sidebar-tablist"
        size="large"
      >
        {renderTabs()}
      </TabList>

    </div>
  );
}

export default Sidebar;