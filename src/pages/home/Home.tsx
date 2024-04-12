import {
  useState,
  useEffect,
} from 'react';
import { 
  Badge,
  Text,
  Subtitle2Stronger,
  Link,
 } from '@fluentui/react-components';
 import {
  Home20Filled,
  Home16Filled,
} from "@fluentui/react-icons";
import './Home.css';

function Home() {
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
          .home-title-badge {
            height: 1.5rem !important;
          }
        }
      `, style.sheet.cssRules.length);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <>
      <div className="home-title-container">
        <div className="home-title">
          <Badge
            className="home-title-badge"
            shape="rounded"
            color="important"
            appearance="outline"
            icon={windowWidth > minWidth ? <Home20Filled /> : <Home16Filled />}
          >
            <Subtitle2Stronger>
              Home
            </Subtitle2Stronger>
          </Badge>
        </div>
      </div>

      <div className="home-content-container">
        <Text>
          This project is a boilerplate for building Electron applications with React and FluentUI. It includes features for handling user settings, theme changes, and language localization.
        </Text>
        <Text>Getting Started 🛠️</Text>
          <ol>
            <li>Clone the repository.</li>
            <li>Install dependencies using "npm install".</li>
            <li>Start the development server using "npm start".</li>
          </ol>
        <Text>Scripts 📜</Text>
          <ul>
            <li>"npm start": Start the development server.</li>
            <li>"npm run build": Build the project for production.</li>
          </ul>
        <Text>Project Structure 📂</Text>
          <ul>
            <li>"src/": Contains the source code for the React application.</li>
            <li>"electron/": Contains the Electron main process code.</li>
            <li>"language/": Contains JSON files for language localization.</li>
            <li>"dist/": Output directory for the built Electron application.</li>
          </ul>
        <Text>Configuration Files ⚙️</Text>
          <ul>
            <li>"package.json": Contains project metadata and dependencies.</li>
            <li>"electron-builder.json5": Configuration for building the Electron application for different platforms.</li>
            <li>"vite.config.ts": Vite configuration for building the React application and Electron integration.</li>
          </ul>
        <Text>Additional Notes 📝</Text>
          <ul>
            <li>The project uses FluentUI components for the UI.</li>
            <li>User settings are stored in a JSON file in the <Text weight="bold">[db/]</Text> directory.</li>
            <li>Theme changes are handled using Electron's <Text weight="bold">[nativeTheme]</Text></li>
            <li>Language localization is supported through JSON files in the <Text weight="bold">[language/]</Text> directory.</li>
          </ul>
        <Text>Developer👨‍💻</Text>
        <Text>
          This project was created by <Link href="https://linktr.ee/burakunal28" target="_blank">Burak ÜNAL</Link>
        </Text>   
      </div>
    </>
  )
}

export default Home;