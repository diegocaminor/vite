import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import chalk from "chalk";

export default defineConfig(({ command, mode }) => {
  const port = 3000;

  console.log(chalk.yellow(command, mode));

  const env = loadEnv(mode, process.cwd());

  console.log(env.VITE_NAME);

  if (mode === "development") {
    console.log("modo desarrollo");
    return {
      server: {
        port,
      },
    };
  } else {
    console.log("modo produccion");
    return {
      build: {
        // lib: {
        //   entry: resolve(__dirname, "lib", "main.js"),
        //   name: "demo",
        //   fileName: (format) => `demo.${format}.js`,
        // },
        rollupOptions: {
          input: {
            main: resolve(__dirname, "index.html"),
            help: resolve(__dirname, "help", "help.html"),
          },
        },
      },
    };
  }
});
