import "./index.html";
import "./index.scss";

import Product from "./components/Product";

const form = document.getElementById("form");
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name: string = (<HTMLInputElement>document.getElementById("name")).value;
  const price: number = +(<HTMLInputElement>document.getElementById("price")).value;

  const product: Product = new Product(name, price);

  const table = document.getElementById("table");

  if (table) {
    table.insertAdjacentHTML("beforeend", `
      <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
      </tr>
    `);
  }
});