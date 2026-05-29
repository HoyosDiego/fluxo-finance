// eslint.config.js
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");

module.exports = [
    {
        // 📂 Aplicar solo a tus archivos de código fuente
        files: ["src/**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            "react": reactPlugin,
            "react-hooks": reactHooksPlugin,
        },
        settings: {
            react: {
                version: "detect", // Detecta automáticamente la versión de React 19
            },
        },
        rules: {
            // 🚀 Cargamos las reglas base recomendadas a mano para evitar el método roto de Expo
            ...tsPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,

            // 🛡️ Tus 3 reglas de oro obligatorias para el equipo:
            "curly": ["error", "all"],
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],

            // Desactivamos la regla vieja que hacía explotar el linter
            "react/display-name": "off",
        },
    },
];