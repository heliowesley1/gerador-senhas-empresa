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
  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px", fontSize: "14px" }}>
    <label>
      Tamanho: <strong>{tamanho}</strong>
    </label>
    <input
      type="range"
      min={8}
      max={32}
      value={tamanho}
      onChange={(e) => setTamanho(Number(e.target.value))}
    />

    <label>
      <input type="checkbox" checked={numeros} onChange={() => setNumeros(!numeros)} /> Usar números
    </label>

    <label>
      <input type="checkbox" checked={simbolos} onChange={() => setSimbolos(!simbolos)} /> Usar símbolos
    </label>
  </div>
);
