// Le composant Drink utilise une série de conditions ? : pour afficher diverses informations selon que la prop namevaut "thé" ou "café".
// Le souci vient de ce que l’information pour chaque boisson est éparpillée à travers de multiples conditions.
// Remaniez ce code pour utiliser une seule instruction if plutôt que trois conditions ? :.

// https://fr.react.dev/learn/conditional-rendering#challenges

function Drink({ name }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Partie de la plante</dt>
        <dd>{name === "thé" ? "feuille" : "grain"}</dd>
        <dt>Dose de caféine</dt>
        <dd>{name === "thé" ? "15–70 mg/tasse" : "80–185 mg/tasse"}</dd>
        <dt>Âge</dt>
        <dd>{name === "thé" ? "4 000+ ans" : "1 000+ ans"}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="thé" />
      <Drink name="café" />
    </div>
  );
}
