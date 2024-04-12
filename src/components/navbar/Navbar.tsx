import { useEffect } from 'react';
import './Navbar.css'
import { Subtitle2 } from '@fluentui/react-components';

const Navbar = () => {

  useEffect(() => {
    const width = window.screen.width;
    const minWidth = Math.round(width * 0.7);
    const style = document.createElement('style');
    document.head.appendChild(style);
  
    if (style.sheet) {
      style.sheet.insertRule(`
        @media (max-width: ${minWidth}px) {
          .navbar-logo {
            margin-left: -15px;
            margin-top: 0.8vh;
            height: 18px;
          }
        }
      `, style.sheet.cssRules.length);
    }
  
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="navbar">
       <Subtitle2 className="navbar-logo-text">Electron-React-Fluentui-Boilerplate</Subtitle2>
    </div>
  );
}

export default Navbar;