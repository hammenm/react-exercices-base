// Ce composant RecipeList contient deux appels map imbriqués.
// Pour le simplifier, extrayez-en un composant Recipe qui acceptera des props id, name et ingredients.
// Où placer sa key et pourquoi ?

// https://fr.react.dev/learn/rendering-lists#challenges

import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recettes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

