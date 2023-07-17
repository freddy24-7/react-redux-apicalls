# React Redux Photo Album App - Async and Thunks

This project is a React Redux photo album app that allows users to view and manage albums and photos.
The code is based on Steven Grider's [React with Redux](https://www.udemy.com/course/react-redux/) course on Udemy.
This project runs on a json server that provides a REST API for managing users, albums, and photos.
The app uses Redux for state management and Redux Toolkit for simplified Redux development.
The project illustrates the use of Thunks for handling asynchronous logic.
It also uses Redux Toolkit Query for simplified data fetching and caching.
To install json server, run the following command:
npm install -g json-server
Thereafter, to run the json server, run the following command:
json-server --watch db.json --port 3005

```

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

4. Open your browser and visit `http://localhost:3000` to see the app.

## Dependencies

The project uses the following dependencies:

- `react`: JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `react-redux`: Official Redux bindings for React.
- `redux`: Predictable state container for JavaScript apps.
- `@reduxjs/toolkit`: Official Redux toolkit package.
- `@reduxjs/toolkit/query`: Toolkit for simplified Redux data fetching and caching.
- `axios`: Promise-based HTTP client for making API requests.
- `classnames`: JavaScript utility for conditionally joining classNames together.
- `faker`: JavaScript library for generating fake data.

## Functionality

The app provides the following functionality:

- Fetches a list of users from the API.
- Displays a list of users with their albums.
- Allows adding and removing users.
- Allows adding and removing albums for each user.
- Displays a list of photos in each album.
- Allows adding and removing photos in each album.

## Redux Store

The Redux store is configured with the following state slices:

- `users`: Manages the list of users and their associated albums.
- `albumsApi`: Handles API requests and caching related to albums.
- `photosApi`: Handles API requests and caching related to photos.

The store also includes middleware for handling API requests.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency from your project.

## Contributing

Contributions to the project are welcome. You can create a pull request with your proposed changes.

## License

This project is licensed under the [MIT License](LICENSE).