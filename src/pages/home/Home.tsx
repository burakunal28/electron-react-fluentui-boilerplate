import {
  useContext,
} from 'react';
import { 
  Button,
  Subtitle2Stronger,
  Text,
  Link,
 } from '@fluentui/react-components';
 import {
  Home20Filled,
  PrintFilled,
} from "@fluentui/react-icons";

import './Home.css'
import { LanguageContext } from '../../language/Language';


function Home() {
  const { languageData } = useContext(LanguageContext) as { languageData: { [key: string]: string } };

  return (
    <>
      <div className="home-title-container">
        <div className="home-title">
          <Home20Filled />
          <Subtitle2Stronger>
            {languageData.homeTitle}
          </Subtitle2Stronger>
        </div>
        <div className="home-button-container">
          <Button
            shape="circular"
            icon={<PrintFilled />}
            appearance="primary"
          />
        </div>
      </div>
      <Text size={400} weight="bold">Electron-React-FluentUI Boilerplate 🚀</Text><br /><br />
        <Text>
          This project is a boilerplate for building Electron applications with React and FluentUI. It includes features for handling user settings, theme changes, and language localization.
        </Text>
        <Text size={300}>Getting Started 🛠️</Text><br />
          <ol>
            <li>Clone the repository.</li>
            <li>Install dependencies using "npm install".</li>
            <li>Start the development server using "npm start".</li>
          </ol>
        <Text size={300}>Scripts 📜</Text><br />
          <ul>
            <li>"npm start": Start the development server.</li>
            <li>"npm run build": Build the project for production.</li>
          </ul>
        <Text size={300}>Project Structure 📂</Text><br />
          <ul>
            <li>"src/": Contains the source code for the React application.</li>
            <li>"electron/": Contains the Electron main process code.</li>
            <li>"language/": Contains JSON files for language localization.</li>
            <li>"dist/": Output directory for the built Electron application.</li>
          </ul>
        <Text size={300}>Configuration Files ⚙️</Text><br />
          <ul>
            <li>"package.json": Contains project metadata and dependencies.</li>
            <li>"electron-builder.json5": Configuration for building the Electron application for different platforms.</li>
            <li>"vite.config.ts": Vite configuration for building the React application and Electron integration.</li>
          </ul>
        <Text size={300}>Additional Notes 📝</Text><br />
          <ul>
            <li>The project uses FluentUI components for the UI.</li>
            <li>User settings are stored in a JSON file in the <Text weight="bold">[db/]</Text> directory.</li>
            <li>Theme changes are handled using Electron's <Text weight="bold">[nativeTheme]</Text></li>
            <li>Language localization is supported through JSON files in the <Text weight="bold">[language/]</Text> directory.</li>
          </ul><br />
        <Text size={300}>Developer👨‍💻</Text><br /><br />
        <Text>
          This project was created by <Link href="https://linktr.ee/burakunal28" target="_blank">Burak ÜNAL</Link>
        </Text><br /><br />
    </>
  )
}

export default Home;