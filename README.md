# Electron-React-FluentUI Boilerplate 🚀

This project is a boilerplate for building Electron applications with React and FluentUI. It includes features for handling user settings, theme changes, and language localization.

## Getting Started 🛠️

To get started with the project, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

## Scripts 📜

- `npm start`: Start the development server.
- `npm run build`: Build the project for production.

## Project Structure 📂

The project structure is as follows:

- `src/`: Contains the source code for the React application.
- `electron/`: Contains the Electron main process code.
- `language/`: Contains JSON files for language localization.
- `dist/`: Output directory for the built Electron application.

## Configuration Files ⚙️

- `package.json`: Contains project metadata and dependencies.
- `electron-builder.json5`: Configuration for building the Electron application for different platforms.
- `vite.config.ts`: Vite configuration for building the React application and Electron integration.

## Additional Notes 📝

- The project uses FluentUI components for the UI.
- User settings are stored in a JSON file in the [db/] directory.
- Theme changes are handled using Electron's [nativeTheme]
- Language localization is supported through JSON files in the [language/] directory.

## Developer 👨‍💻

This project was created by [Burak Ünal](https://linktr.ee/burakunal28)