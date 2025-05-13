// Lorsque vous appuyez sur « Suivant » alors que la dernière sculpture est affichée, le code plante.
// Corrigez la logique pour éviter ça.
// Vous pouvez y parvenir en ajoutant du code au gestionnaire d’événement, ou en désactivant le bouton quand l’action devient impossible.
//
// Après avoir corrigé le crash, ajoutez un bouton « Précédent » qui permet de revenir en arrière.
// Il ne devrait pas planter sur la première sculpture.

// https://fr.react.dev/learn/state-a-components-memory#challenges

import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Suivant</button>
      <h2>
        <i>{sculpture.name} </i>
        par {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} sur {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Masquer" : "Afficher"} les détails
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
