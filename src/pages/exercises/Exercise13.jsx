// Utilisez l’opérateur conditionnel (cond ? a : b) pour afficher ❌ si isPacked ne vaut pas true.

// https://fr.react.dev/learn/conditional-rendering#challenges

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && "✅"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Liste d’affaires de Sally Ride</h1>
      <ul>
        <Item isPacked={true} name="Combinaison spatiale" />
        <Item isPacked={true} name="Casque à feuille d’or" />
        <Item isPacked={false} name="Photo de Tam" />
      </ul>
    </section>
  );
}
