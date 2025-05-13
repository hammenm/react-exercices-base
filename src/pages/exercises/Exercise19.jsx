// Cet exemple affiche un célèbre haïku de Tachibana Hokushi, dont chaque ligne est enrobée par une balise <p>.
// Votre tâche consiste à insérer un séparateur <hr /> entre chaque paragraphe.
// La structure finale devrait ressembler à ceci :
//
// <article>
//   <p>J’écris, efface, réécris</p>
//   <hr />
//   <p>Efface à nouveau, puis</p>
//   <hr />
//   <p>Un coquelicot fleurit.</p>
// </article>
//
// Un haïku contient trois lignes, mais votre solution devrait fonctionner pour un nombre quelconque de lignes.
// Remarquez que les éléments <hr /> n’apparaissent qu’entre les éléments <p>, donc ni au début ni à la fin !

// https://fr.react.dev/learn/rendering-lists#challenges

const poem = {
  lines: [
    "J’écris, efface, réécris",
    "Efface à nouveau, puis",
    "Un coquelicot fleurit.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </article>
  );
}
