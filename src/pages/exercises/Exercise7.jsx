// Ce code plante avec une erreur qui dit Objects are not valid as a React child (« Les objets ne sont pas des enfants React valides ») :

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
      <h1>Liste des tâches de {person}</h1>
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
