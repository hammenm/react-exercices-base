import { createServer } from "node:http";

const quotes = [
  { content: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès.", author: "Albert Schweitzer" },
  { content: "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.", author: "Albert Einstein" },
  { content: "Fais de ta vie un rêve, et d’un rêve, une réalité.", author: "Antoine de Saint-Exupéry" },
  { content: "L’échec est simplement l’opportunité de recommencer, cette fois de manière plus intelligente.", author: "Henry Ford" },
  { content: "Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi.", author: "Georges Clémenceau" },
  { content: "La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute.", author: "Confucius" },
  { content: "Tout ce que l’esprit de l’homme peut concevoir et croire, il peut l’accomplir.", author: "Napoleon Hill" },
  { content: "Rêve comme si tu vivais pour toujours. Vis comme si tu allais mourir aujourd’hui.", author: "James Dean" },
  { content: "Les grandes choses ne sont jamais faites par une seule personne. Elles sont faites par une équipe de personnes.", author: "Steve Jobs" },
  { content: "La connaissance parle, mais la sagesse écoute.", author: "Jimi Hendrix" },
  { content: "On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux.", author: "Antoine de Saint-Exupéry" },
  { content: "Sois le changement que tu veux voir dans le monde.", author: "Mahatma Gandhi" },
  { content: "Croyez en vous et tout sera possible.", author: "Audrey Hepburn" },
  { content: "L’imagination est plus importante que le savoir.", author: "Albert Einstein" },
  { content: "Il n’est jamais trop tard pour devenir ce que vous auriez pu être.", author: "George Eliot" },
  { content: "Le bonheur n’est pas quelque chose de prêt à l’emploi. Il vient de vos propres actions.", author: "Dalaï Lama" },
  { content: "La meilleure façon de prédire l’avenir est de le créer.", author: "Peter Drucker" },
  { content: "Ne jugez pas chaque jour à la récolte que vous faites, mais aux graines que vous semez.", author: "Robert Louis Stevenson" },
  { content: "Ce n’est pas la force, mais la persévérance, qui fait les grandes œuvres.", author: "Samuel Johnson" },
  { content: "Les seules limites de nos réalisations de demain, ce sont nos doutes et hésitations d’aujourd’hui.", author: "Franklin D. Roosevelt" }
];


const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const quoteRandom = quotes[Math.floor(Math.random() * quotes.length)];
  res.end(JSON.stringify(quoteRandom, null, 2));
});

const PORT = 3000;
// starts a simple http server locally
server.listen(PORT, "localhost", () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
