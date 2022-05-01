import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await dir2array("../data/2022/img");
const base = "https://codeforkosen.github.io/dcon-opendata/data/2022/img/";
console.log(data);
const img = data.map(d => { return { url: base + d }; });
await Deno.writeTextFile("../data/2022/img.json", JSON.stringify(img, null, 2));
await Deno.writeTextFile("../data/2022/img.csv", CSV.stringify(img));
