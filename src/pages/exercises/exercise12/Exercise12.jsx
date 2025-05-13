// Extrayez un composant Card du balisage ci-dessous, et utilisez la prop children pour lui passer divers contenus JSX :

// https://fr.react.dev/learn/passing-props-to-a-component#challenges

export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h1>À propos</h1>
          <p>Aklilu Lemma était un scientifique éthiopien renommé qui a découvert le traitement naturel de la bilharziose.</p>
        </div>
      </div>
    </div>
  );
}
