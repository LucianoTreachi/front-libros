import { Route, Routes } from "react-router-dom";
import Layout from "@components/layout/Layout";
import { routes } from "./routes";
import Error404 from "@components/pages/error404/Error404";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
