// Ce composant Gallery contient un balisage très similaire pour deux profils.
// Extrayez-en un composant Profile pour réduire la duplication. Vous devrez choisir quelles props lui passer.

// https://fr.react.dev/learn/passing-props-to-a-component#challenges

import { getImageUrl } from './utils.js';

export default function Gallery() {
  return (
    <div>
      <h1>Scientifiques remarquables</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession : </b>
            physicienne et chimiste
          </li>
          <li>
            <b>Récompenses : 4 </b>
            (Prix Nobel de Physique, Prix Nobel de Chimie, Médaille Davy, Médaille Matteucci)
          </li>
          <li>
            <b>A découvert : </b>
            le Polonium (élément chimique)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession : </b>
            géochimiste
          </li>
          <li>
            <b>Récompenses : 2 </b>
            (Prix Miyake de géochimie, Prix Tanaka)
          </li>
          <li>
            <b>A découvert : </b>
            une méthode de mesure du dioxyde de carbone dans l’eau de mer
          </li>
        </ul>
      </section>
    </div>
  );
}
