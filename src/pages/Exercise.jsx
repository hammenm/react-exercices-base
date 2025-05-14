import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router";

const exercisesIsFolder = new Set([5, 10, 11, 12, 16, 17, 18, 21]);

const loadExercise = async (exerciseId) => {
  const importPath = exercisesIsFolder.has(parseInt(exerciseId, 10))
    ? `./exercises/exercise${exerciseId}/Exercise${exerciseId}`
    : `./exercises/Exercise${exerciseId}`;

  const { default: component } = await import(
    /* @vite-ignore */
    importPath
  );
  return component;
};

function ExerciseContent({ exerciseId }) {
  const [exercise, setExercise] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const ExerciseComponent = await loadExercise(exerciseId);
        setExercise(() => ExerciseComponent);
      } catch {
        setError(
          "Error loading exercise. Please fix the file and reload page.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchExercise();
  }, [exerciseId, error]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    );
  }
  if (!exercise) {
    return <div>Exercise not found</div>;
  }

  const ExerciseComponent = exercise;
  return <ExerciseComponent />;
}

function IFrame({ children }) {
  const [iframeBody, setIframeBody] = useState(null);

  const handleLoad = (e) => {
    const iframe = e.target;
    if (iframe?.contentDocument) {
      setIframeBody(iframe.contentDocument.body);
    }
  };

  return (
    <iframe srcDoc={`<!DOCTYPE html>`} onLoad={handleLoad}>
      {iframeBody && createPortal(children, iframeBody)}
    </iframe>
  );
}

export default function Exercise() {
  const { exerciseId } = useParams();

  return (
    <main id="main">
      <h1>Exercise {exerciseId}</h1>
      <IFrame>
        <ExerciseContent exerciseId={exerciseId} />
      </IFrame>
    </main>
  );
}
