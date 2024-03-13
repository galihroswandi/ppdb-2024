import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./app/landingpage";
import Login from "./app/login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ppdb/login" element={<Login />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
