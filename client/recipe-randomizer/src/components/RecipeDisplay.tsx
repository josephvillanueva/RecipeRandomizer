import React from "react";

interface Recipe {
  id: number;
  title: string;
  image: string;
}

interface RecipeDisplayProps {
  recipes: Recipe[];
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipes }) => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border rounded-lg shadow-md p-4 bg-gray-50"
          >
            <h2 className="font-bold text-lg text-gray-700">{recipe.title}</h2>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-lg mt-2"
            />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeDisplay;
