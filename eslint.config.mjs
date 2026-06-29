import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "build/**"],
  },
  ...nextCoreWebVitals,
  {
    // The React Compiler lint rules newly enabled by default in Next 16 flag
    // several pre-existing patterns (SSR mount hook, embla autoplay refs, the
    // vendored shadcn carousel). They are advisory and not build-breaking, so
    // they are kept as warnings pending a dedicated follow-up cleanup.
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/purity": "warn",
      "react-hooks/refs": "warn",
    },
  },
];

export default eslintConfig;
