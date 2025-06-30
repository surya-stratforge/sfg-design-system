import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default {
  input: "index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({
      extract: "styles/index.css",
      modules: false,
      plugins: [tailwindcss(), autoprefixer()],
    }),
  ],
};
