import { CSV } from "https://js.sabae.cc/CSV.js";

const list = [];
const dirs = [];
for await (const f of Deno.readDir("../data")) {
  if (!f.isDirectory) continue;
  const fn = "../data/" + f.name + "/team.csv";
  dirs.push(fn);
}
dirs.sort();
for await (const fn of dirs) {
  console.log(fn);
  const data = await CSV.fetchJSON(fn);
  data.forEach(i => list.push(i));
}
await Deno.writeTextFile(`../data/team.csv`, CSV.stringify(list));
