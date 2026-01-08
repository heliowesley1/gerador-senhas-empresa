import React from "react";

interface Props {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<Props> = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    style={{
      background: "transparent",
      color: "inherit", // Herda a cor do texto do Card
      border: "1px solid currentColor",
      padding: "6px 12px",
      borderRadius: "6px",
      marginBottom: "10px",
      fontSize: "0.9rem",
      opacity: 0.8
    }}
  >
    {theme === "dark" ? "☀️ Modo Claro" : "jm Modo Escuro"}
  </button>
);