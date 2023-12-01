import { useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import './Footer.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbDivider,
  BreadcrumbButton,
  Badge,
} from "@fluentui/react-components";
import {
  HomeFilled,
  HomeRegular,
  CheckmarkFilled,
  DismissFilled,
} from "@fluentui/react-icons";
import { LanguageContext } from '../../language/Language';

function Footer() {
  const { languageData } = useContext(LanguageContext) as { languageData: { [key: string]: string } };
  const location = useLocation();
  const [isHovered] = useState(false);

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const HomeIcon = isHovered || location.pathname === "/" ? HomeFilled : HomeRegular;

  useEffect(() => {

    const handleOnline = () => {
      setIsOnline(true);
    };
    
    const handleOffline = () => {
      setIsOnline(false);
    };
  
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
  
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
    
  }, []);

  return (
    <div className="footer">
      <div className="footer-breadcrumb-container">
        <Breadcrumb size="medium">
          <BreadcrumbItem>
            <BreadcrumbButton
              current={location.pathname === "/"}
              icon={<HomeIcon />}
              disabled
              style={{ cursor: 'auto' }} 
            >
            </BreadcrumbButton>
          </BreadcrumbItem>
          {location.pathname === "/settings" && (
            <>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton
                  current={true}
                  disabled
                >
                  {languageData.settingsPage}
                </BreadcrumbButton>
              </BreadcrumbItem>
            </>
          )}
        </Breadcrumb>
      </div>

      <div className="footer-internet-container">
        <Badge 
          className="footer-badge"
          color={isOnline ? "success" : "danger"} 
          appearance="outline"
          icon={isOnline ? <CheckmarkFilled /> : <DismissFilled />}
          size="large"
        >
          {languageData.internet}
        </Badge>
      </div>
    </div>
  );
}

export default Footer;