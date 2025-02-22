import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["src/main.tsx", "src/vite-env.d.ts"],
}, ...fixupConfigRules(compat.extends(
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard-with-typescript",
    "plugin:prettier/recommended",
)), {
    plugins: {
        react: fixupPluginRules(react),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },

            project: "tsconfig.json",
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "prettier/prettier": ["error", {
            endOfLine: "lf",
            semi: true,
            singleQuote: false,
            tabWidth: 2,
            trailingComma: "es5",
        }],

        "react-hooks/exhaustive-deps": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",

        "@typescript-eslint/no-floating-promises": ["error", {
            ignoreVoid: true,
        }],
    },
}];