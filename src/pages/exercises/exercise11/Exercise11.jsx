// Dans cet exemple, Avatar reçoit une prop numérique size qui détermine les largeur et hauteur de l’<img>.
// La prop size est définie à 40 dans cet exemple. Pourtant, si vous ouvrez l’image dans un nouvel onglet
// (cliquez bouton droit dessus pour pouvoir le faire), vous constaterez que l’image elle-même est plus grande (160 pixels).
// La véritable taille de l’image est déterminée en fonction de la taille de vignette demandée.
//
// Modifiez le composant Avatar pour demander la taille d’image la plus proche sur base de la prop size.
// Plus précisement, si la size fait moins de 90, passez 's' (pour “small”) plutôt que 'b' (pour “big”) à la fonction getImageUrl.
// Vérifiez que vos modifications fonctionnent en affichant des avatars avec différentes valeurs de la prop size et en ouvrant les images dans de nouveaux onglets.

// https://fr.react.dev/learn/passing-props-to-a-component#challenges

import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP'
      }}
    />
  );
}
