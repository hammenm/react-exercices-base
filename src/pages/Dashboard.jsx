import { NavLink, Outlet } from "react-router";
import classes from "./Dashboard.module.css";

const exercisesCount = 3;
const exercises = Array.from({ length: exercisesCount }, (_, i) => i + 1);

// https://www.greatfrontend.com/questions/react-interview-questions
// https://leetcode.com/discuss/post/742791/front-end-interview-questions-by-anonymo-jmq0/
// https://reactpractice.dev/

export default function Dashboard() {
  return (
    <>
      <header>
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
