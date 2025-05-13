import { CSV } from "https://js.sabae.cc/CSV.js";

const year = Deno.args[0];
if (!year) {
  console.log("addResult.js [year]");
  Deno.exit();
}

const data = await CSV.fetchJSON("../data/" + year + "/team.csv");
const append = await CSV.fetchJSON("../data/" + year + "/result.csv");

for (const team of data) {
  const res = append.find(i => i.ID == team.ID);
  if (res) {
    Object.assign(team, res);
  }
}
console.log(data);
const fn = "../data/" + year + "/team.csv";
await Deno.writeTextFile(fn, CSV.stringify(data));
