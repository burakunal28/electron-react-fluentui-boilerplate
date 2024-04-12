import * as React from "react";
import { Location, useNavigate } from 'react-router-dom';
import { LocationContext } from '../location/LocationContext';
import { FC, useState, useEffect, useContext } from 'react';
import './Footer.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbDivider,
  BreadcrumbButton,
  Button,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  makeStyles,
  Text,
} from "@fluentui/react-components";
import { version as appVersion } from '../../../package.json';

const useStyles = makeStyles({
  notification: {
    width: "100%",
  },
  report: {
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
  },
});

const Footer: FC = () => {
  const location = useContext(LocationContext) as Location;
  const navigate = useNavigate();
  const styles = useStyles();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
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
          .footer {
            width: 93vw;
          }
        }
      `, style.sheet.cssRules.length);
    }
  
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const prepareEmailContent = () => {
    return `App Version: ${appVersion}\nInternet Access: ${isOnline ? 'Yes' : 'No'}\nCurrent Page: ${location.pathname}`;
  };
  
  const handleMail = (ev: React.FormEvent) => {
    ev.preventDefault();
    const emailContent = prepareEmailContent();
    window.location.href = `mailto:example@example.com?subject=Report&body=${encodeURIComponent(emailContent)}`;
  };

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
      <Breadcrumb 
          size={windowWidth > minWidth ? 'medium' : 'small'}
        >
          <BreadcrumbItem>
            <BreadcrumbButton
              current={location.pathname === "/home"}
              onClick={() => navigate('/home')}
            >
              Home
            </BreadcrumbButton>
          </BreadcrumbItem>
          {location.pathname === "/help" && (
            <>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton
                  current={true}
                  onClick={() => navigate('/help')}
                >
                  Help
                </BreadcrumbButton>
              </BreadcrumbItem>
            </>
          )}
        </Breadcrumb>
      </div>

      <div className="footer-buttons-container">

        <Dialog modalType="non-modal">
          <DialogTrigger disableButtonEnhancement>
            <Button 
              className="footer-custom-button"
              appearance="subtle"
              size={windowWidth > minWidth ? 'medium' : 'small'}
            >
              Report Issue
            </Button>
          </DialogTrigger>
          <DialogSurface>
              <DialogBody>
                <DialogTitle>
                  Report Issue
                </DialogTitle>
                <DialogContent className={styles.report}>
                  <Text>
                    App Version <strong>{appVersion}</strong>
                  </Text>
                  <Text>
                   Internet <strong>{isOnline ? 'Yes' : 'No'}</strong>
                  </Text>
                  <Text>
                   Current Page <strong>{location.pathname}</strong>
                  </Text>
                </DialogContent>
                <DialogActions>
                  <DialogTrigger disableButtonEnhancement>
                    <Button appearance="secondary">
                      Close
                    </Button>
                  </DialogTrigger>
                  <Button type="submit" appearance="primary" onClick={handleMail}>
                    Report
                  </Button>
                </DialogActions>
              </DialogBody>
          </DialogSurface>
        </Dialog>

      </div>
      
    </div>
  );
}

export default Footer;