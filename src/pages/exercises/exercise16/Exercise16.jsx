// Cet exemple affiche une liste de personnes.
//
// Modifiez-le pour afficher deux listes distinctes l’une de l’autre : les Chimistes et Tous les autres.
// Comme précédemment, vous pouvez déterminer si une personne est chimiste en testant person.profession === 'chimiste'.

// https://fr.react.dev/learn/rendering-lists#recap

import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        célèbre pour {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Scientifiques</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
