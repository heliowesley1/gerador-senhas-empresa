# Gerador de Senhas 

Um aplicativo web moderno e intuitivo para geração de senhas seguras, desenvolvido para uso corporativo. O projeto foca em simplicidade, segurança e uma experiência de usuário fluida.

## 🚀 Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

-   [React](https://react.dev/) (v19)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)
-   CSS3 (Estilização via Inline Styles e CSS Modules)

## ✨ Funcionalidades

-   **Geração Automática:** Uma nova senha é gerada automaticamente ao carregar a página ou alterar qualquer configuração.
-   **Personalização:**
    -   Controle deslizante para definir o tamanho da senha (8 a 32 caracteres).
    -   Opções para incluir/excluir números.
    -   Opções para incluir/excluir símbolos especiais.
-   **Área de Transferência:** Botão "Copiar" com feedback visual imediato e animação ("Copiado!").
-   **Interface Limpa:** Design minimalista e profissional, alinhado com a identidade visual da empresa.

## 📂 Estrutura do Projeto

```text
src/
├── assets/          # Imagens e logotipos (logo.png)
├── components/      # Componentes React reutilizáveis
│   ├── Card.tsx     # Container principal com a logo
│   ├── Controls.tsx # Inputs de controle (slider e checkboxes)
│   └── Output.tsx   # Exibição da senha e botão de copiar
├── hooks/           # Hooks personalizados
├── App.tsx          # Componente principal e lógica de estado
└── main.tsx         # Ponto de entrada da aplicação