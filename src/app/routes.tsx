import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const MainLayout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../features/home/pages/Home"));
const Bookmark = lazy(() => import("../features/bookmark/pages/Bookmark"));
const Movies = lazy(() => import("../features/movies/pages/Movies"));
const MovieDetail = lazy(() => import("../features/movies/pages/MovieDetail"));
const Tickets = lazy(() => import("../features/tickets/page/tickets"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {useRoutes([
        {
          path: "/",
          element: <MainLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: "bookmark", element: <Bookmark /> },
            { path: "movies", element: <Movies /> },
            { path: "tickets", element: <Tickets /> },
            { path: "movie/:id", element: <MovieDetail /> },
          ],
        },
      ])}
    </Suspense>
  );
};

export default React.memo(AppRoutes);
