import { CSV } from "https://js.sabae.cc/CSV.js";

const data = CSV.toJSON(await CSV.fetch("../data/2022/team.csv"));
await Deno.writeTextFile("../data/2022/team.json", JSON.stringify(data, null, 2));
