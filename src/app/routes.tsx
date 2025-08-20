import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Logo from "../shared/components/ui/logo/logo";


const MainLayout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../features/home/pages/Home"));
const Bookmark = lazy(() => import("../features/bookmark/pages/Bookmark"));
const Movies = lazy(() => import("../features/movies/pages/Movies"));
const MovieDetail = lazy(
  () => import("../features/movies/pages/movieDetail/MovieDetail")
);

const MovieImagesOutlet = lazy(
  () =>
    import("../features/movies/pages/movieDetail/movieOutlet/MovieImagesOutlet")
);
const MovieCredits = lazy(
  () => import("../features/movies/pages/movieDetail/movieOutlet/MovieCredits")
);
const MovieComments = lazy(
  () => import("../features/movies/pages/movieDetail/movieOutlet/MovieComments")
);
const CastDetail = lazy(() => import("../features/cast/pages/CastDetail"));
const Search = lazy(() => import("../features/search/pages/Search"));
const CompanyDetail = lazy(() => import("../features/company/pages/CompanyDetail"));


const AppRoutes = () => {
  return (
    <Suspense fallback={<Logo />}>
      {useRoutes([
        {
          path: "/",
          element: <MainLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: "bookmark", element: <Bookmark /> },
            { path: "movies", element: <Movies /> },
            { path: "bookmark", element: <Bookmark /> },
            { path: "search", element: <Search /> },
            { path: "company/:id", element: < CompanyDetail/> },
           
            {
              path: "movie/:id",
              element: <MovieDetail />,
              children: [
                {
                  index: true,

                  element: <MovieComments />,
                },
                {
                  path: "credits",
                  element: <MovieCredits />,
                },
                {
                  path: "images",
                  element: <MovieImagesOutlet />,
                },
              ],
            },
            {
              path: "/person/:id",
              element: <CastDetail />,
            },
          ],
        },
      ])}
    </Suspense>
  );
};

export default React.memo(AppRoutes);
