import { CSV } from "https://js.sabae.cc/CSV.js";

const year = Deno.args[0];
if (!year) {
  console.log("addYouTubeLink.js [year]");
  Deno.exit();
}

const baseurl = "https://www.youtube.com/live/gbulH1etEHU";

const data = await CSV.fetchJSON("../data/" + year + "/team.csv");
const append = await CSV.fetchJSON("../data/" + year + "/team_youtube.csv");

const makeTime = (s) => {
  const n = s.split(":");
  const sec = (parseInt(n[0]) * 60 + parseInt(n[1])) * 60 + parseInt(n[2]);
  return sec;
};

let idx = 1;
for (const team of data) {
  const res = append.find(i => i.ID == team.ID);
  const t = makeTime(res.TIME);
  const url = `${baseurl}?t=${t}s`;
  res["プレゼン順"] = idx++;
  res["プレゼンURL"] = url;
  if (res) {
    Object.assign(team, res);
  }
}
console.log(data);
const fn = "../data/" + year + "/team.csv";
await Deno.writeTextFile(fn, CSV.stringify(data));
