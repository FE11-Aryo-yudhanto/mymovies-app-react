import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";

import DetailMovie from "../pages/Details";
import Favorite from "../pages/Favorite";
import Homepage from "../pages";

import { ThemeContext } from "../utils/context";
import { setFavorites } from "../utils/redux/reducers/reducer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/movie/:id_movie", // Path param
    element: <DetailMovie />,
  },
  {
    path: "/favorites",
    element: <Favorite />,
  },
]);

const App = () => {
  const dispatch = useDispatch()
  const [theme, setTheme] = useState("light")
  const background = useMemo(() => ({ theme, setTheme }), [theme])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(()=>{
    const getFavMovie = localStorage.getItem("FavMovie")
    if(getFavMovie){
      dispatch(setFavorites(JSON.parse(getFavMovie)))
    }
  },[])

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )

}

export default App;
