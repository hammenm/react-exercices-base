// Découper davantage les composants
//
// Pour le moment, Gallery.js exporte à la fois Profile et Gallery, ce qui est un peu déroutant.
//
// Déplacez le composant Profile vers son propre fichier Profile.js, puis modifiez le composant App pour qu’il affiche à la fois <Profile /> et <Gallery /> l’un après l’autre.

// https://fr.react.dev/learn/importing-and-exporting-components#challenges

import Gallery from './Gallery';
import { Profile } from './Gallery';

export default function Exercise5() {
  return (
    <div>
      <Profile />
    </div>
  );
}
