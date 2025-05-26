export default function Exercice7() {
  return (
    <>
      <p>
        Écrire une application qui récupère une image de chat, une image de
        chien et qui demande à l&apos;utilisateur quel image il préfère :
      </p>
      <ul>
        <li>
          Pour les chiens, on utilise l&apos;API{" "}
          <a href="https://dog.ceo/api/breeds/image/random">
            https://dog.ceo/api/breeds/image/random
          </a>
        </li>
        <li>
          Pour les chats, on utilise l&apos;API{" "}
          <a href="https://api.thecatapi.com/v1/images/search">
            https://api.thecatapi.com/v1/images/search
          </a>
        </li>
      </ul>
      <p>
        Après plusieurs itérations, d&apos;après les résultats, indiquez à
        l&apos;utilisateur si il préfère les chiens ou les chats
      </p>
    </>
  );
}
