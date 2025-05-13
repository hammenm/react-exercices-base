// Extrayez l’URL de l’image depuis l’objet person plutôt que de l’inscrire en dur.

// https://fr.react.dev/learn/javascript-in-jsx-with-curly-braces#challenges

const person = {
  name: "Gregorio Y. Zara",
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
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Améliorer le visiophone</li>
        <li>Préparer les cours d’aéronautique</li>
        <li>Travailler sur un moteur à alcool</li>
      </ul>
    </div>
  );
}
