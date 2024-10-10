
# Recipe Randomizer

## Project Overview

The Recipe Randomizer is a web application that allows users to find recipes based on ingredients they have at home. Users can enter ingredients into a search box, and the application fetches recipes that include those ingredients. The app provides a clean and user-friendly interface, featuring responsive design and a colorful background to create an inviting experience.

## Features

- Search for recipes by entering ingredients.
- Clear search results and input fields with a single button click.
- Responsive design optimized for various screen sizes.
- Colorful and minimalistic layout to enhance user experience.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Express.js (for backend)

## Installation

To set up the Recipe Randomizer on your local machine, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/recipe-randomizer.git
   cd recipe-randomizer
   ```

2. **Install Dependencies**

   Navigate to both the frontend and backend directories to install the necessary packages.

   **Frontend:**

   ```bash
   cd frontend
   npm install
   ```

   **Backend:**

   ```bash
   cd ../backend
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the backend directory and add your API key:

   ```bash
   API_KEY=your_spoonacular_api_key
   ```

   Replace `your_spoonacular_api_key` with your actual API key from [Spoonacular](https://spoonacular.com/food-api).

4. **Start the Development Server**

   First, start the backend server:

   ```bash
   cd backend
   npm start
   ```

   Then, in another terminal, start the frontend server:

   ```bash
   cd frontend
   npm run dev
   ```

5. **Access the Application**

   Open your web browser and navigate to `http://localhost:5173` to view the application.

## Usage

1. Enter ingredients you have in the search box.
2. Press **Enter** or click the **Search** button to fetch recipes.
3. To clear the search input and results, click the **Clear** button.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or questions, please reach out to [your email](mailto:your.email@example.com).
