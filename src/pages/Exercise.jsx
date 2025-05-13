import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Exercise() {
  const { exerciseId } = useParams();
  const [exercise, setExercise] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const { default: ExerciseComponent } = await import(
          /* @vite-ignore */
          `./exercises/Exercise${exerciseId}`
        );
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
    return <div>{error}</div>;
  }
  if (!exercise) {
    return <div>Exercise not found</div>;
  }
  const ExerciseComponent = exercise;
  return (
    <main>
      <h1>Exercise {exerciseId}</h1>
      <ExerciseComponent />
    </main>
  );
}
