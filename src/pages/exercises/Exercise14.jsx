// Dans cet exemple, chaque Item reçoit une prop d’importance numérique.
// Utilisez l’opérateur && pour afficher « (Importance : X) » en italiques,
// mais seulement pour les objets dont l’importance n’est pas zéro.
//
// Votre liste d’objets devrait à terme ressembler à ceci :
//
//     Combinaison spatiale (Importance : 9)
//     Casque à feuille d’or
//     Photo de Tam (Importance : 6)
//
// N’oubliez pas d’ajouter une espace entre les deux libellés !

// https://fr.react.dev/learn/conditional-rendering#challenges

function Item({ name, importance }) {
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Liste d’affaires de Sally Ride</h1>
      <ul>
        <Item importance={9} name="Combinaison spatiale" />
        <Item importance={0} name="Casque à feuille d’or" />
        <Item importance={6} name="Photo de Tam" />
      </ul>
    </section>
  );
}
