import React from "react";

interface Props {
  senha: string;
}

export const PasswordStrength: React.FC<Props> = ({ senha }) => {
  const getStrength = () => {
    let score = 0;
    if (senha.length >= 8) score += 1;
    if (/[A-Z]/.test(senha)) score += 1;
    if (/[0-9]/.test(senha)) score += 1;
    if (/[^A-Za-z0-9]/.test(senha)) score += 1;

    switch (score) {
      case 4:
        return { label: "Muito Forte", color: "#16a34a" };
      case 3:
        return { label: "Forte", color: "#65a30d" };
      case 2:
        return { label: "Média", color: "#facc15" };
      case 1:
        return { label: "Fraca", color: "#f87171" };
      default:
        return { label: "Muito Fraca", color: "#b91c1c" };
    }
  };

  const { label, color } = getStrength();

  return (
    <div style={{ margin: "10px 0", fontWeight: "bold", color }}>
      Força da senha: {label}
    </div>
  );
};
