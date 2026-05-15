import { CSV } from "https://js.sabae.cc/CSV.js";

const year = Deno.args[0];
if (!year) {
  throw new Error("set year as param");
}
const data = CSV.toJSON(await CSV.fetch(`../data/${year}/team.csv`));
await Deno.writeTextFile(`../data/${year}/team.json`, JSON.stringify(data, null, 2));
