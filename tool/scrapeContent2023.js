import { DOMParser } from "https://js.sabae.cc/DOMParser.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";

const fn = "../data/2023/team.csv";
const data = await CSV.fetchJSON(fn);
for (const team of data) {
  //const html = await (await fetch(team.URL)).text();
  const html = await fetchOrLoad(team.URL);
  const dom = new DOMParser().parseFromString(html, "text/html");
  const ps = dom.querySelectorAll("section#page-main-content > p");
  console.log(ps);
  const list = [];
  ps.forEach(p => list.push(p.text.replace(/<br>/g, "\n")));
  const text = list.join("\n\n");
  console.log(text);
  team.作品概要 = text;
}
await Deno.writeTextFile(fn, CSV.stringify(data));
