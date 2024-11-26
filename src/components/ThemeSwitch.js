import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/action";

 const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(toggleTheme());
    }
  }, [dispatch]);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleThemeChange}>
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
};

export default ThemeSwitcher
