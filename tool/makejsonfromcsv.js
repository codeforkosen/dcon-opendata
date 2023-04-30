import { CSV } from "https://js.sabae.cc/CSV.js";

const year = 2023;
const data = CSV.toJSON(await CSV.fetch(`../data/${year}/team.csv`));
await Deno.writeTextFile(`../data/${year}/team.json`, JSON.stringify(data, null, 2));
