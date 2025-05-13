// Cliquer sur ce bouton est censé alterner la couleur de l’arrière-plan de la page entre blanc et noir.
// Cependant, rien ne se produit lorsque vous cliquez dessus. Corrigez le problème.

// https://fr.react.dev/learn/responding-to-events#challenges

export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }

  return <button onClick={handleClick()}>Basculer la lumière</button>;
}
