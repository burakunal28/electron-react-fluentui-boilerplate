import { Badge, Text, Subtitle2Stronger, Link } from '@fluentui/react-components';
import { Home20Filled } from "@fluentui/react-icons";
import './Home.css';

function Home() {
  return (
    <>
      <div className="home-title-container">
        <div className="home-title">
          <Badge
            className="home-title-badge"
            shape="rounded"
            color="important"
            appearance="outline"
            icon={<Home20Filled />}
          >
            <Subtitle2Stronger>
              Home
            </Subtitle2Stronger>
          </Badge>
        </div>
      </div>

      <div className="home-content-container">
        <h1>Electron-React-FluentUI Boilerplate 🚀</h1>

        <Text>A boilerplate for building Electron apps with React and Fluent UI, featuring user settings and theme management.</Text>
        
        <h2>Getting Started 🛠️</h2>
        <ol>
          <li>Clone the repository.</li>
          <li>Run <code>npm install</code>.</li>
          <li>Start the server with <code>npm start</code>.</li>
        </ol>

        <h2>Building the Application 🏗️</h2>
        <ol>
          <li>Complete the "Getting Started" steps.</li>
          <li>Build for your platform:
            <ul>
              <li>Windows: <code>npm run build:win</code></li>
              <li>macOS: <code>npm run build:mac</code></li>
              <li>Linux: <code>npm run build:linux</code></li>
            </ul>
          </li>
          <li>Find the built app in the <code>release/</code> directory.</li>
        </ol>

        <h2>Project Structure 📂</h2>
        <ul>
          <li><code>src/</code>: Source code for the React app.</li>
          <li><code>electron/</code>: Electron main process code.</li>
          <li><code>release/</code>: Built Electron app output.</li>
        </ul>

        <h2>Configuration Files ⚙️</h2>
        <ul>
          <li><code>package.json</code>: Project metadata and dependencies.</li>
          <li><code>electron-builder.json5</code>: Build configuration for platforms.</li>
          <li><code>vite.config.ts</code>: Vite config for React and Electron.</li>
        </ul>

        <h2>Additional Notes 📝</h2>
        <ul>
          <li>Uses <Link href="https://react.fluentui.dev">FluentUI</Link> components.</li>
          <li>Theme changes via Electron's nativeTheme.</li>
        </ul>

        <h2>Developer 👨‍💻</h2>
        <Text>
          Created by <Link href="https://linktr.ee/burakunal28">Burak Ünal</Link>
        </Text>
      </div>
    </>
  )
}

export default Home;