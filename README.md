# Password Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [File Structure](#file-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The **Password Generator** is a web application built using React and Vite that allows users to generate strong, random passwords based on specified criteria. This tool is designed to help users create secure passwords to enhance their online security.

## Features

- Generate random passwords of customizable lengths
- Include or exclude specific character types:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters
- Copy generated password to clipboard
- Responsive design for mobile and desktop use

## Live Demo

You can view the live demo of the application [here](https://shimmering-melomakarona-6e577c.netlify.app/).

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>=14.0.0)
- [npm](https://www.npmjs.com/) (>=6.0.0) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Awadesh365/Password-Generator.git
   cd Password-Generator
   ```

2. **Install dependencies:**

   Using npm:
   ```sh
   npm install
   ```

   Using yarn:
   ```sh
   yarn install
   ```

3. **Start the development server:**

   Using npm:
   ```sh
   npm start
   ```

   Using yarn:
   ```sh
   yarn start
   ```

   Open your browser and navigate to `http://localhost:3000` to see the application running.

## Usage

1. Open the application in your web browser.
2. Select the desired criteria for your password:
   - Length of the password
   - Types of characters to include
3. Click the "Generate Password" button.
4. Copy the generated password using the "Copy to Clipboard" button.

## Configuration

The application can be configured by modifying the `config.js` file. You can adjust default settings such as minimum and maximum password length, character sets, and other application-specific parameters.

Example `config.js`:

```javascript
export const config = {
  defaultLength: 12,
  minLength: 8,
  maxLength: 32,
  allowedCharacters: {
    upperCase: true,
    lowerCase: true,
    numbers: true,
    special: true,
  },
};
```

## File Structure

```plaintext
password-generator/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

- **public/**: Static assets and the main HTML file.
  - `index.html`: The main HTML file.
- **src/**: Source code of the application.
  - `App.jsx`: Main application component.
  - `index.css`: Main CSS file.
  - `main.jsx`: Entry point for the React application.
- `.eslintrc.cjs`: ESLint configuration file.
- `.gitignore`: Specifies which files and directories to ignore in git.
- `README.md`: The file you are currently reading.
- `index.html`: The main HTML file for the project.
- `package-lock.json`: Automatically generated for locking the versions of project's dependencies.
- `package.json`: Contains project metadata and dependencies.
- `postcss.config.js`: Configuration file for PostCSS.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `vite.config.js`: Configuration file for Vite.

## Development

### Scripts

- `npm start` / `yarn start`: Start the development server.
- `npm run build` / `yarn build`: Build the application for production.
- `npm test` / `yarn test`: Run tests.

### Testing

Tests are written using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/). To run the tests, use:

```sh
npm test
```

or

```sh
yarn test
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add your feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a Pull Request.

Ensure your code adheres to our coding standards and passes all tests before submitting a PR.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using the Password Generator! We hope it helps you create secure passwords effortlessly. If you have any questions or feedback, please open an issue or reach out via the provided contact information.

---
