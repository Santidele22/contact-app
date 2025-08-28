// eslint.config.js
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import astro from "eslint-plugin-astro";

export default [
  // Reglas base de JavaScript
  js.configs.recommended,

  // Configuración para archivos Astro
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astro.parsers.astro,
      parserOptions: {
        extraFileExtensions: [".astro"],
      },
    },
    plugins: {
      astro,
    },
    rules: {
      ...astro.configs.recommended.rules,
      quotes: ["error", "single"], // comillas simples
      indent: ["error", "tab"],    // tabs en vez de espacios
    },
  },

  // Configuración para TypeScript
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      quotes: ["error", "single"], // comillas simples
      indent: ["error", "tab"],    // tabs en vez de espacios
    },
  },
];
