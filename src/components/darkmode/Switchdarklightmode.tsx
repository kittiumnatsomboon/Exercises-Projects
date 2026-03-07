import { useState, useEffect } from "react";
export default function Switchdarklightmode() {
  // State to track the current theme
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });
  const toggleDarkMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // apply theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>

    </>
  );

}

