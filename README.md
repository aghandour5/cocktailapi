# Cocktail API Express App

This is a Node.js Express web application that lets you search and discover cocktails using [TheCocktailDB API](https://www.thecocktaildb.com/). You can search by name, filter by alcoholic content or category, and get random cocktail suggestions.

## Features

- Search cocktails by name
- Filter cocktails by alcoholic/non-alcoholic
- Filter cocktails by category
- Get a random cocktail
- View cocktail details and image

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone this repository:
    ```sh
    git clone https://github.com/aghandour5/cocktailapi.git
    cd cocktailapi
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    node index.js
    ```
    or, if you use nodemon:
    ```sh
    npx nodemon index.js
    ```

4. Open your browser and go to [http://localhost:4000](http://localhost:4000)

## Project Structure
 ├── index.js ├── package.json ├── /views │ └── index.ejs ├── /public │ └── styles/ │ └── main.css

## Technologies Used

- Node.js
- Express
- EJS (Embedded JavaScript templates)
- Axios
- TheCocktailDB API

## License

This project is for educational purposes.
