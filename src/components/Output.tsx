import React from "react";

interface Props {
  senha: string;
  copiar: () => void;
}

export const Output: React.FC<Props> = ({ senha, copiar }) => (
  <div
    style={{
      background: "#f1f5f9",
      padding: "12px",
      borderRadius: "8px",
      textAlign: "center",
      fontWeight: "bold",
      letterSpacing: "1px",
      marginBottom: "20px",
      wordBreak: "break-all",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span>{senha || "Clique em gerar senha"}</span>
    {senha && (
      <button
        onClick={copiar}
        style={{
          background: "#0f4c81",
          color: "white",
          padding: "4px 8px",
          borderRadius: "6px",
          marginLeft: "10px",
        }}
      >
        Copiar
      </button>
    )}
  </div>
);
