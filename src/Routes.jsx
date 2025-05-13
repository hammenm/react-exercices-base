import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard.jsx";
import Home from "./pages/Home.jsx";
import Exercise from "./pages/Exercise.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/exercises/:exerciseId" element={<Exercise />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
