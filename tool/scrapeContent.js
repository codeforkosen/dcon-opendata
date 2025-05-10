import { DOMParser } from "https://js.sabae.cc/DOMParser.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
import { fetchOrLoad } from "https://js.sabae.cc/fetchOrLoad.js";

const year = Deno.args[0];
if (!year) {
  console.log("scrapeContent.js [year]");
  Deno.exit();
}
//const result = []; // await CSV.fetchJSON("../data/" + year + "/result.csv", []);
const result = await CSV.fetchJSON("../data/" + year + "/result.csv");

const data = [];

const url = "https://dcon.ai/teams/";
const html = await fetchOrLoad(url);
const dom = new DOMParser().parseFromString(html, "text/html");
const teamlink = dom.querySelectorAll(".final h4 a");
let idx = 0;
for (const a of teamlink) {
  const teamurl = url + a.getAttribute("href").substring(1);
  const ID = "DCON" + year + "_" + ++idx;
  data.push({ ID, URL: teamurl });
}

// ID,URL,高専,チーム名,作品名,チーム画像URL,作品画像URL,インタビュー記事URL,メンター,メンター所属,メンター画像URL,メンターURL,プレゼン順,プレゼンURL,順位,企業評価額(億円),受賞,作品概要

const rename = (name) => {
  if (name == "学校名") return "高専";
  return name;
};

for (const team of data) {
  const html = await fetchOrLoad(team.URL);
  const dom = new DOMParser().parseFromString(html, "text/html");
  const ps = dom.querySelectorAll(".wp-block-media-text__content > p");
  for (const p of ps) {
    const name = p.childNodes[0].text;
    const val = p.text.substring(name.length).trim();
    team[rename(name)] = val;
  }
  const ps2 = dom.querySelectorAll("p.teamprofile");
  for (const p of ps2) {
    const name = p.childNodes[0].text;
    if (name == "メンター") {
      const st = p.querySelector("strong");
      const val1 = st.childNodes[0].text;
      /*
      const val2 = st.text.substring(val1.length).trim();
      team["メンター"] = val1;
      team["メンター所属"] = val2;
      */
      const n = val1.indexOf("（");
      if (n < 0) {
        team["メンター"] = val1.substring(val1.length - 1);
      } else {
        team["メンター"] = val1.substring(0, n - 1);
        team["メンター所属"] = val1.substring(n + 1, val1.length - 1);
      }
    } else {
      const val = p.text.substring(name.length).trim();
      team[rename(name)] = val;
    }
    team["チーム画像URL"] = dom.querySelector(".wp-block-media-text__media img").getAttribute("src");
    const ps3 = dom.querySelectorAll(".wp-block-group__inner-container")[1].querySelector("p");
    team["作品概要"] = ps3.text;
    team["作品画像URL"] = dom.querySelector(".wp-block-image img").getAttribute("src");

    const res = result.find(i => i.ID == team.ID);
    if (res) {
      Object.assign(team, res);
    }
  }
}
console.log(data);
await Deno.mkdir("../data/" + year, { recursive: true });
const fn = "../data/" + year + "/team.csv";
await Deno.writeTextFile(fn, CSV.stringify(data));
