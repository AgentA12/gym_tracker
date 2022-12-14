import { Nav } from "./components/navbar/Nav";
import TemplateContainer from "./components/templates/TemplateContainer";
import Login from "./components/miscellaneous/Login";
import Signup from "./components/miscellaneous/Signup";
import { Routes, Route, useLocation } from "react-router-dom";
import ProgressContainer from "./components/progress/ProgressContainer";
import Workout from "./components/workout/Workout";
import CreateTemplate from "./components/templates/CreateTemplateContainer";
import EditTemplate from "./components/templates/EditTemplateContainer";
import Protected from "./components/ProtectedRoute";
import auth from "./utils/auth/auth";

export default function App() {
  const isLoggedIn = auth.isLoggedIn();

  const { pathname } = useLocation();

  return (
    <>
      <Nav activeNav={pathname.replace("/", "")} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Login"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <TemplateContainer />
            </Protected>
          }
        />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/Templates"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <TemplateContainer />
            </Protected>
          }
        />

        <Route
          path="/Create-Template"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <CreateTemplate />
            </Protected>
          }
        />

        <Route
          path="/Edit-Template"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <EditTemplate />
            </Protected>
          }
        />
        <Route
          path="/Progress"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <ProgressContainer />
            </Protected>
          }
        />

        {/* <Route
          path="/Workout"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Workout />
            </Protected>
          }
        /> */}
      </Routes>
    </>
  );
}
