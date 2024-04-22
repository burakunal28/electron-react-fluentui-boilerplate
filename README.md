# Electron-React-FluentUI Boilerplate 🚀

This project is a boilerplate for building Electron applications with React and FluentUI. It includes features for handling user settings and theme changes.
## Preview

![Preview](screenshot.png)

## Getting Started 🛠️

To get started with the project, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

## Building the Application 🏗️

To build the Electron application for distribution, follow these steps:

1. Make sure you have completed the steps in the "Getting Started" section.
2. Run the build command for your target platform:
   - For Windows: `npm run build:win`
   - For macOS: `npm run build:mac`
   - For Linux: `npm run build:linux`
3. The built application will be available in the `release/` directory.

Note: Make sure you have the necessary dependencies and build tools installed for your target platform.

## Project Structure 📂

The project structure is as follows:

- `src/`: Contains the source code for the React application.
- `electron/`: Contains the Electron main process code.
- `release/`: Output directory for the built Electron application.

## Configuration Files ⚙️

- `package.json`: Contains project metadata and dependencies.
- `electron-builder.json5`: Configuration for building the Electron application for different platforms.
- `vite.config.ts`: Vite configuration for building the React application and Electron integration.

## Additional Notes 📝

- The project uses [FluentUI https://react.fluentui.dev] components for the UI from Microsoft.
- Theme changes are handled using Electron's [nativeTheme]

## Developer 👨‍💻

This project was created by [Burak Ünal](https://linktr.ee/burakunal28)
