// Il y a un souci dans la façon dont le composant Profile est déclaré et utilisé.
// Repérez-vous l’erreur ?
// (Essayez de vous rappeler comment React fait la distinction entre les composants et les balises HTML classiques !)

// https://fr.react.dev/learn/your-first-component#challenges

function profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Scientifiques de renom</h1>
      <profile />
      <profile />
      <profile />
    </section>
  );
}
