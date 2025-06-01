import { ErrorBoundary } from "react-error-boundary";

import { useEffect, useState } from "react";
import { useParams } from "react-router";

const exercisesIsFolder = new Set([5, 10, 11, 12, 16, 17, 18, 21, 27, 28, 29]);

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

function FallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>Something went wrong while rendering the exercise.</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function Exercise() {
  const { exerciseId } = useParams();

  return (
    <main id="main">
      <h1>Exercise {exerciseId}</h1>
      <ErrorBoundary
        FallbackComponent={FallbackComponent}
        onReset={() => window.location.reload()}
        resetKeys={[exerciseId]}
      >
        <ExerciseContent exerciseId={exerciseId} />
      </ErrorBoundary>
    </main>
  );
}
