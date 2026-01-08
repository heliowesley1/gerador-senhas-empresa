import React from "react";
import logo from "../assets/logo.png";

interface Props {
  children: React.ReactNode;
}

export const Card: React.FC<Props> = ({ children }) => (
  <div
    style={{
      background: "white",
      color: "#020617",
      padding: "32px",
      borderRadius: "12px",
      width: "100%",
      maxWidth: "480px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
      textAlign: "center",
    }}
  >
    <img src={logo} alt="Logo Empresarial" style={{ width: "80px", marginBottom: "20px" }} />
    {children}
  </div>
);
