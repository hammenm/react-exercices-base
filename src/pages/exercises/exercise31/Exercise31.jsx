export default function Exercise31() {
  return (
    <>
      <p>
        Créer une application capable de récupérer les infos des packages npm.
        L&apos;utilisateur doit être capable de rentrer une valeur dans un champ
        de texte. Si le package existe, alors il retourne les informations sur
        le package, notamment : la description de la libraries, la dernière
        version uploadé, et le nombre d&apos;étoiles sur Github Vous pouvez
        utiliser l&apos;API npms-api, documenté sur{" "}
        <a href="https://api-docs.npms.io/">https://api-docs.npms.io/</a> (voir
        l&apos;endpoint{" "}
        <a href="https://api.npms.io/v2/package/:name">
          https://api.npms.io/v2/package/:name
        </a>
        )
      </p>
    </>
  );
}
