import { CSV } from "https://js.sabae.cc/CSV.js";

const list = [];
const dirs = [];
for await (const f of Deno.readDir("../data")) {
  if (!f.isDirectory) continue;
  const fn = "../data/" + f.name + "/team.csv";
  const year = f.name;
  dirs.push({ fn, year });
}
dirs.sort((a, b) => a.year - b.year);
for await (const { fn, year } of dirs) {
  console.log(fn);
  const data = await CSV.fetchJSON(fn);
  data.forEach(i => {
    i.year = year;
    list.push(i)
  });
}
await Deno.writeTextFile(`../data/team.csv`, CSV.stringify(list));
