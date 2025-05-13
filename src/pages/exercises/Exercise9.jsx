// Dans l’objet ci-dessous, l’URL complète de l’image est découpée en quatre parties :
// l’URL de base, imageId, imageSize et l’extension de fichier.
//
// Nous souhaitons que l’URL de l’image combine ces attributs :
// URL de base (toujours 'https://i.imgur.com/'), imageId ('7vQD0fP'),
// imageSize ('s'), et l’extension de fichier (toujours '.jpg').
// Hélas, quelque chose ne va pas dans la façon dont la balise <img> spécifie son src.
//
// Pouvez-vous réparer ça ?

// https://fr.react.dev/learn/javascript-in-jsx-with-curly-braces#challenges

const baseUrl = "https://i.imgur.com/";
const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Liste des tâches de {person.name}</h1>
      <img
        className="avatar"
        src="{baseUrl}{person.imageId}{person.imageSize}.jpg"
        alt={person.name}
      />
      <ul>
        <li>Améliorer le visiophone</li>
        <li>Préparer les cours d’aéronautique</li>
        <li>Travailler sur un moteur à alcool</li>
      </ul>
    </div>
  );
}
