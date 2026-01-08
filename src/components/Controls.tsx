import React from "react";

interface Props {
  tamanho: number;
  setTamanho: (v: number) => void;
  numeros: boolean;
  setNumeros: (v: boolean) => void;
  simbolos: boolean;
  setSimbolos: (v: boolean) => void;
  apenasMaiusculas: boolean;
  toggleMaiusculas: () => void;
  apenasMinusculas: boolean;
  toggleMinusculas: () => void;
}

export const Controls: React.FC<Props> = ({
  tamanho,
  setTamanho,
  numeros,
  setNumeros,
  simbolos,
  setSimbolos,
  apenasMaiusculas,
  toggleMaiusculas,
  apenasMinusculas,
  toggleMinusculas,
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "10px", fontSize: "14px", color: "#334155" }}>
    
    {/* Controle Deslizante */}
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontWeight: "600" }}>
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
          accentColor: "#0f4c81",
          height: "6px"
        }}
      />
    </div>

    {/* Grid System para alinhamento perfeito:
       - 'gridTemplateColumns: 1fr 1fr': Cria duas colunas de tamanho igual.
       - Itens alinhados à esquerda (padrão) garantem que checkboxes fiquem um embaixo do outro.
    */}
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "1fr 1fr", 
      gap: "12px 20px", // 12px vertical, 20px horizontal
      marginTop: "5px",
      maxWidth: "100%", // Garante que use a largura disponível
    }}>
      {/* Coluna 1 */}
      <label style={labelStyle}>
        <input 
          type="checkbox" 
          checked={numeros} 
          onChange={() => setNumeros(!numeros)} 
          style={checkboxStyle}
        /> 
        Usar números
      </label>

      {/* Coluna 2 */}
      <label style={labelStyle}>
        <input 
          type="checkbox" 
          checked={simbolos} 
          onChange={() => setSimbolos(!simbolos)} 
          style={checkboxStyle}
        /> 
        Usar símbolos
      </label>

      {/* Coluna 1 - Linha 2 */}
      <label style={labelStyle}>
        <input 
          type="checkbox" 
          checked={apenasMaiusculas} 
          onChange={toggleMaiusculas} 
          style={checkboxStyle}
        /> 
        Apenas Maiúsculas
      </label>

      {/* Coluna 2 - Linha 2 */}
      <label style={labelStyle}>
        <input 
          type="checkbox" 
          checked={apenasMinusculas} 
          onChange={toggleMinusculas} 
          style={checkboxStyle}
        /> 
        Apenas Minúsculas
      </label>
    </div>
  </div>
);

// Styles
const labelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start", // Alinha à esquerda para o checkbox ficar reto
  gap: "8px",
  cursor: "pointer",
  fontWeight: "500",
  whiteSpace: "nowrap",
  color: "#475569"
};

const checkboxStyle: React.CSSProperties = {
  width: "18px",
  height: "18px",
  accentColor: "#0f4c81",
  cursor: "pointer",
  margin: 0 // Remove margens padrão do browser
};