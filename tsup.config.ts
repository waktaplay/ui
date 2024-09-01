import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/components/**/*.{ts,js}?(x)"],

  format: ["esm"],
  external: ["react"],

  loader: {
    ".svg": "dataurl",
  },

  minify: "terser",
  tsconfig: "./tsconfig.json",

  dts: true,
  splitting: false,
  clean: true,
  treeshake: true,
  bundle: true,

  esbuildOptions(options) {
    options.assetNames = "assets/[name]"
  },
})
