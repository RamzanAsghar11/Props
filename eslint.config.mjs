import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow the use of `any` type (disable the rule)
      "@typescript-eslint/no-explicit-any": "off",
      
      // Allow `let` even if the variable is not reassigned (disable the rule)
      "prefer-const": "off",

      // Or, if you want to modify the severity (e.g., warn instead of error):
      // "@typescript-eslint/no-explicit-any": "warn",
      // "prefer-const": "warn",
    },
  },
];

export default eslintConfig;
