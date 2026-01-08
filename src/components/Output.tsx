import React from "react";

interface Props {
  senha: string;
  copiar: () => void;
  copiado: boolean;
}

export const Output: React.FC<Props> = ({ senha, copiar, copiado }) => (
  <div
    style={{
      background: "#f1f5f9",
      padding: "10px 14px",
      borderRadius: "10px",
      textAlign: "left",
      fontWeight: "bold",
      letterSpacing: "1px",
      marginBottom: "20px",
      wordBreak: "break-all",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "56px",
      border: "1px solid #e2e8f0" // Borda sutil para destacar a área
    }}
  >
    <span style={{ flex: 1, fontSize: "18px", color: "#1e293b" }}>{senha || "..."}</span>
    
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {/* Mensagem de feedback */}
      {copiado && (
        <span 
          style={{ 
            color: "#16a34a", 
            fontSize: "12px", 
            fontWeight: "bold",
            animation: "fadeIn 0.3s ease-in",
            whiteSpace: "nowrap"
          }}
        >
          Copiado!
        </span>
      )}

      {senha && (
        <button
          onClick={copiar}
          style={{
            background: copiado ? "#16a34a" : "#0f4c81",
            color: "white",
            padding: "8px 16px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "700",
            textTransform: "uppercase", // Texto em caixa alta
            letterSpacing: "0.5px",
            border: "none",
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)" // Sombra leve no botão
          }}
          onMouseOver={(e) => {
            if (!copiado) e.currentTarget.style.background = "#0b3a63";
          }}
          onMouseOut={(e) => {
            if (!copiado) e.currentTarget.style.background = "#0f4c81";
          }}
        >
          {copiado ? "✓" : "Copiar"}
        </button>
      )}
    </div>
  </div>
);