import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";
import buttonStyles from "./button.module.css";
import user from "./data.json";
import suma from "./suma.ts";

console.log("buttonStyles");
console.log(buttonStyles);

console.log(`La suma de 2 y 5 es: ${suma(2, 5)}`);
const modules = import.meta.glob("./modules/*.js");

console.log(modules);
console.log("Module load");

for (const path in modules) {
  modules[path]().then((module) => {
    module.load();
  });
  // top level await
  // const module = await modules[path]();
  // module.load();
}

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite Diego!dsds!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <pre>${JSON.stringify(user)}</pre>
  </div>
`;

document.getElementById("counter").className = buttonStyles.btn;

setupCounter(document.querySelector("#counter"));
