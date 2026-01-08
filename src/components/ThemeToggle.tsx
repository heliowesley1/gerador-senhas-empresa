import React from "react";

interface Props {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<Props> = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    style={{
      background: theme === "dark" ? "#f97316" : "#0f4c81",
      color: "white",
      padding: "6px 12px",
      borderRadius: "6px",
      marginBottom: "10px",
    }}
  >
    {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
  </button>
);
