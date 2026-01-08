import React from "react";

interface Props {
  tamanho: number;
  setTamanho: (v: number) => void;
  numeros: boolean;
  setNumeros: (v: boolean) => void;
  simbolos: boolean;
  setSimbolos: (v: boolean) => void;
}

export const Controls: React.FC<Props> = ({
  tamanho,
  setTamanho,
  numeros,
  setNumeros,
  simbolos,
  setSimbolos,
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "10px", fontSize: "14px", color: "#334155" }}>
    
    {/* Controle Deslizante */}
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px", fontWeight: "600" }}>
        <label>Tamanho da senha</label>
        <span style={{ color: "#0f4c81", fontSize: "16px" }}>{tamanho}</span>
      </div>
      <input
        type="range"
        min={8}
        max={32}
        value={tamanho}
        onChange={(e) => setTamanho(Number(e.target.value))}
        style={{
          width: "100%",
          cursor: "pointer",
          accentColor: "#0f4c81", // Cor azul corporativa na bolinha do slider
          height: "6px"
        }}
      />
    </div>

    {/* Checkboxes lado a lado */}
    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "5px" }}>
      <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", fontWeight: "500" }}>
        <input 
          type="checkbox" 
          checked={numeros} 
          onChange={() => setNumeros(!numeros)} 
          style={{ width: "16px", height: "16px", accentColor: "#0f4c81", cursor: "pointer" }}
        /> 
        Usar números
      </label>

      <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", fontWeight: "500" }}>
        <input 
          type="checkbox" 
          checked={simbolos} 
          onChange={() => setSimbolos(!simbolos)} 
          style={{ width: "16px", height: "16px", accentColor: "#0f4c81", cursor: "pointer" }}
        /> 
        Usar símbolos
      </label>
    </div>
  </div>
);