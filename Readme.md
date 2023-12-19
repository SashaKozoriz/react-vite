# React Vite Good List App

This project is a React application built with Vite. It includes a Good List feature where you can view and interact with a list of goods. The app allows sorting and filtering of goods, as well as moving goods up and down in the list.

## Getting Started
To run the app in development mode, use the following command:
bash
npm run dev

## Available Scripts
- [dev](file:///d%3A/Projects/react-vite/package.json#7%2C6-7%2C6): Start the development server
- [build](file:///d%3A/Projects/react-vite/package.json#8%2C6-8%2C6): Build the app for production
- [lint](file:///d%3A/Projects/react-vite/package.json#9%2C6-9%2C6): Run ESLint to lint the code
- [preview](file:///d%3A/Projects/react-vite/package.json#10%2C6-10%2C6): Preview the production build

## Dependencies
- react: ^18.2.0
- react-dom: ^18.2.0
- vite: ^4.4.5
- @vitejs/plugin-react: ^4.0.3
- classnames: ^2.3.2
- sass: ^1.68.0
- eslint: ^8.53.0
- eslint-plugin-react: ^7.32.2
- eslint-plugin-react-hooks: ^4.6.0
- eslint-plugin-react-refresh: ^0.4.3

## Project Structure
- `src/index.jsx`: Entry point of the app
- `src/App.jsx`: Main component containing the Good List feature
- `src/components/GoodList/GoodList.jsx`: Component for displaying the list of goods
- `src/components/GoodCard/GoodCard.jsx`: Component for displaying individual goods
- `src/components/Header/Header.jsx`: Component for the header with sorting and filtering functionality
- `src/constants.js`: File containing constants used in the app
- `src/goods.json`: JSON file containing the list of goods

## Styling
The app uses SCSS for styling, with separate SCSS files for each component.

## Additional Notes
- The app uses React Strict Mode for enhanced error handling during development.
- ESLint is set up to enforce code quality and best practices.

Feel free to explore the codebase and make any necessary changes or enhancements.
