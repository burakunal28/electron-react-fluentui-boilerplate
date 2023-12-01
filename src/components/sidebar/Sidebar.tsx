import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from 'react';
import './Sidebar.css'
import {
  Tab,
  TabList,
} from "@fluentui/react-components";
import { 
  HomeFilled,
  HomeRegular,
  SettingsFilled,
  SettingsRegular,
} from "@fluentui/react-icons";
import { LanguageContext } from '../../language/Language';

const Sidebar = () => {
  const { languageData } = useContext(LanguageContext) as { languageData: { [key: string]: string } };
  const location = useLocation();
  const navigate = useNavigate();

  const HomeIcon = location.pathname === "/" ? HomeFilled : HomeRegular;
  const SettingsIcon = location.pathname === "/settings" ? SettingsFilled : SettingsRegular;

  const handleClick = (path: string) => {
    navigate(path);
  };

  const renderTabs = () => {
    
    return (
      <>
        <Tab
          icon={<HomeIcon />}
          value="home"
          onClick={() => handleClick("/")}
          className={location.pathname === "/" ? "sidebar-active-tab" : ""}
        >
          {languageData.homePage}
        </Tab>
        <Tab
          icon={<SettingsIcon />}
          value="settings"
          onClick={() => handleClick("/settings")}
          className={location.pathname === "/settings" ? "sidebar-active-tab" : ""}
        >
          {languageData.settingsPage}
        </Tab>
      </>
    );
  };

  return (
    <div className="sidebar">

      <TabList 
        vertical appearance="subtle" 
        defaultSelectedValue="home"
      >
        {renderTabs()}
      </TabList>

    </div>
  );
}

export default Sidebar;