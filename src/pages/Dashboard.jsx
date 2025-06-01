import { NavLink, Outlet } from "react-router";
import classes from "./Dashboard.module.css";

const exercisesCount = 32;
const exercises = Array.from({ length: exercisesCount }, (_, i) => i + 1);

export default function Dashboard() {
  return (
    <>
      <header id="header">
        <nav className={classes.nav}>
          <NavLink to="/">Home</NavLink>
          {exercises.map((id) => (
            <NavLink key={id} to={`/exercises/${id}`}>
              Exercise {id}
            </NavLink>
          ))}
        </nav>
      </header>
      <Outlet />
    </>
  );
}
