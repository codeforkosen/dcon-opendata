import { CSV } from "https://js.sabae.cc/CSV.js";

const list = [];
for await (const f of Deno.readDir("../data")) {
  if (!f.isDirectory) continue;
  const fn = "../data/" + f.name + "/team.csv";
  const data = await CSV.fetchJSON(fn);
  data.forEach(i => list.push(i));
}
await Deno.writeTextFile(`../data/team.csv`, CSV.stringify(list));
