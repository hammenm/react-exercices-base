// Lorsque vous tapez au clavier quelque chose dans les champs de saisie, rien n’y apparaît.
// C’est comme si vos champs étaient « figés » sur leurs valeurs vides.
// La value du premier <input> est définie de façon à toujours correspondre à la variable firstName,
// et la value du second <input> est calée pour toujours correspondre à la variable lastName.
// Ça, c’est bon.
// Les deux champs ont des gestionnaires d’événements onChange,
// qui essaient de mettre à jour les variables sur base de la dernière saisie en date (e.target.value).
// Pourtant, ces variables ne semblent pas « se souvenir » de leurs valeurs d’un rendu à l’autre.
// Corrigez ça en utilisant plutôt des variables d’état.

// https://fr.react.dev/learn/state-a-components-memory#challenges

export default function Form() {
  let firstName = "";
  let lastName = "";

  function handleFirstNameChange(e) {
    firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    lastName = e.target.value;
  }

  function handleReset() {
    firstName = "";
    lastName = "";
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Prénom"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Nom"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Salut {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Réinitialiser</button>
    </form>
  );
}
