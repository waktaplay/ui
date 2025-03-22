import path from "node:path"
import { fileURLToPath } from "node:url"

import globals from "globals"

import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

import { defineConfig, globalIgnores } from "eslint/config"
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat"

import tsParser from "@typescript-eslint/parser"
import reactRefresh from "eslint-plugin-react-refresh"
import prettier from "eslint-plugin-prettier"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  globalIgnores(["**/dist", "**/.eslintrc.cjs"]),
  {
    extends: fixupConfigRules(
      compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ),
    ),

    plugins: {
      "react-refresh": reactRefresh,
      prettier: fixupPluginRules(prettier),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
    },

    rules: {
      "prettier/prettier": "error",
      "import/no-unresolved": "off",
      "import/no-named-as-default": "off",

      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
    },
  },
])
